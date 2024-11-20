import { en } from "../../assets/lang/en";
import ButtonComponent from "../../core/shared/submit-button/submit-button.component";
import SignComponent from "../../core/layouts/sign/sign.component";
import { Form, Input } from "antd";
import { useSignInStyles } from "./signin.style";
import { useUsers } from "./actions/signin.query";
import { useNavigate } from "react-router-dom";
import { Routes } from "../../router/router";
import { toast } from "react-toastify";
import jwtEncode from "jwt-encode";
import { useCallback } from "react";
import { ISignInFormValues } from "./signin";
import { setToken } from "../../core/helpers/get-token";

const SignInComponent = () => {
  const classes = useSignInStyles();
  const { data } = useUsers();
  const navigate = useNavigate();

  const onFinish = useCallback(
    (values: ISignInFormValues) => {
      const secret = "my_secret_key";
      const user = data.find(
        (user: ISignInFormValues) =>
          user.email === values.email && user.password === values.password
      );
      if (user) {
        const payload = {
          id: user.id,
          email: user.email,
          username: user.username,
          contactNumber: user.contactNumber,
        };
        const token = jwtEncode(payload, secret);

        setToken(token);

        navigate(Routes.home);
      } else {
        toast.error(en.signInInvalid);
      }
    },
    [data]
  );

  const signUp = () => {
    navigate(Routes.signup);
  };
  return (
    <div>
      <SignComponent />
      <div className={classes.signModal}>
        <div className={classes.welcomeText}>
          <p>{en.sign_title}</p>
          <h2>{en.signin}</h2>
        </div>
        <div className={classes.formContainer}>
          <Form
            name="signup"
            layout="vertical"
            onFinish={onFinish}
            requiredMark={false}
          >
            <Form.Item
              label={en.sign_username_email}
              name="email"
              rules={[
                {
                  required: true,
                  message: en.signInEmptyEmail,
                },
              ]}
              className={classes.formItem}
            >
              <Input
                placeholder={en.sign_input_text}
                className={classes.inputLarge}
              />
            </Form.Item>
            <div>
              <Form.Item
                label={en.sign_password}
                name="password"
                rules={[
                  {
                    required: true,
                    message: en.signInEmptPassword,
                  },
                ]}
                className={classes.formItem}
              >
                <Input.Password
                  placeholder={en.sign_password_text}
                  className={classes.inputLarge}
                />
              </Form.Item>
              <div className={classes.forgotPassContainer}>
                <p className={classes.forgotPass}>{en.forgot_password}</p>
              </div>
            </div>
            <div className={classes.submitContainer}>
              <Form.Item>
                <ButtonComponent
                  className={classes.signInButton}
                  htmlType="submit"
                >
                  {en.signin}
                </ButtonComponent>
              </Form.Item>
              <p className={classes.orText}>OR</p>
              <Form.Item>
                <ButtonComponent
                  className={classes.signUpButton}
                  onClick={signUp}
                >
                  {en.signup}
                </ButtonComponent>
              </Form.Item>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default SignInComponent;
