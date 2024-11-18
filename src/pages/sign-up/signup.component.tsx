import { useCallback } from 'react';
import { Form, Input} from 'antd';
import { useSignUpStyles } from './signup.style';
import SignComponent from '../sign/sign.component';
import { en } from '../../assets/lang/en';
import ButtonComponent from '../../core/shared/submit-button/submit-button.component';
import { ISignUpFormValues } from './signup';
import { useSignUp } from './actions/signup.mutation';
import { Link } from 'react-router-dom';
import { Routes } from '../../router/router';


const SignUpComponent = () => {
  const classes = useSignUpStyles();

  const {mutate} = useSignUp()

  const onFinish = useCallback((values:ISignUpFormValues) => {
    mutate(values)
    console.log(values);
  }, []);

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };


  return (
    <div>
      <SignComponent />
      <div className={classes.signModal}>
        <div className={classes.welcomeContainer}>
          <div>
            <p className={classes.welcomeText}>{en.sign_title}</p>
            <h2>{en.signup}</h2>
          </div>
          <div className={classes.rightText}>
            <p className={classes.haveAcc}>{en.sign_have_Acc}</p>
            <Link to={Routes.signin} className={classes.SignInLink}>{en.signin}</Link>
          </div>
        </div>

        <Form
          name="signup"
          layout="vertical"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          className={classes.form}
          requiredMark={false}
        >
          <Form.Item
            label={en.sign_username_email}
            name="email"
            rules={[{ required: true, message: 'Please enter your username or email!' }]}
            className={classes.formItem}
          >
            <Input placeholder={en.sign_input_text} className={classes.inputLarge} />
          </Form.Item>

          <div className={classes.inlineFields}>
            <Form.Item
              label={en.sign_username}
              name="username"
              rules={[{ required: true, message: 'Please enter your user name!' }]}
              className={`${classes.inlineItem} ${classes.formItem}`}
            >
              <Input placeholder={en.sign_username} />
            </Form.Item>

            <Form.Item
              label={en.sign_number}
              name="contactNumber"
              rules={[{ required: true, message: 'Please enter your contact number!' }]}
              className={`${classes.inlineItem} ${classes.formItem}`}
            >
              <Input placeholder={en.sign_number} />
            </Form.Item>
          </div>

          <Form.Item
            label={en.sign_password}
            name="password"
            rules={[{ required: true, message: 'Please enter your password!' }]}
            className={classes.formItem}
          >
            <Input.Password placeholder={en.sign_password_text} className={classes.inputLarge} />
          </Form.Item>

          <Form.Item>
            <ButtonComponent 
              className={classes.signUpButton}
              htmlType="submit"
              >
              {en.signup}
            </ButtonComponent>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default SignUpComponent;
