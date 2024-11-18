import { createUseStyles } from "react-jss";
import { rem } from "../../assets/styles/abstracts/functions";
import sizes from "../../assets/styles/abstracts/sizes";
import colors from "../../assets/styles/abstracts/color";

const styles = {
  signModal: {
    width: rem(539),
    height: rem(741),
    borderRadius: sizes.signBorderRadius,
    backgroundColor: colors.signModalColor,
    position: "absolute",
    top: rem(48),
    left: "50%",
    transform: "translateX(-50%)",
    boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
    padding: rem(36),
    "@media (max-width: 768px)": {
      width: "90%",
    },
  },
  welcomeText: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    marginTop: rem(40),
    "& p": {
      fontSize: sizes.text,
      '@media (max-width: 768px)':{
            fontSize: rem(16),
        }
    },
    "& h2": {
      fontSize: sizes.title,
      lineHeight: rem(82.5),
      '@media (max-width: 768px)':{
            fontSize: sizes.mobileTitle,
        }   
    },
  },
  inputLarge: {
    width: "100%",
    height: rem(57),
    borderRadius: sizes.signInputRadius,
    "&::placeholder": {
      color: colors.inputTextColor,
      "@media (max-width: 768px)": {
        fontSize: sizes.mobilePlaceholder,
      },
    },
  },
  orText: {
    textAlign: "center",
    marginBottom: rem(24),
    marginTop: rem(24),
  },
  signInButton: {
    backgroundColor: "#FFA500",
    borderColor: "#FFA500",
    color: "#fff",
    '@media (max-width: 768px)':{
        fontSize: rem(16)
    }
  },
  signUpButton: {
    backgroundColor: "#FFF4E3",
    borderColor: "#FFF4E3",
    color: "#BC7E23",
    boxShadow: '0px 0px 0px 0px',
    '@media (max-width: 768px)':{
        fontSize: rem(16)
    }
  },
  formItem: {
    "& .ant-form-item-label > label": {
      fontSize: rem(16),
      weight: 400,
      "@media (max-width: 768px)": {
        fontSize: sizes.mobileInputLabel,
      },
    },
  },
  formContainer: {
    marginTop: rem(30),
  },
  submitContainer: {
    marginTop: rem(30),
  },
  forgotPass: {
    color: "#AD3113",
    cursor: "pointer",
    '@media (max-width: 768px)':{
        fontSize: rem(11)
    }
  },
  forgotPassContainer: {
    display: "flex",
    justifyContent: "flex-end",
  },
};

export const useSignInStyles = createUseStyles(styles);
