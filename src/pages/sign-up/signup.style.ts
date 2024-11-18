import { createUseStyles } from "react-jss";
import colors from "../../assets/styles/abstracts/color";
import { rem } from "../../assets/styles/abstracts/functions";
import sizes from "../../assets/styles/abstracts/sizes";

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
    '@media (max-width: 768px)':{
      width: '90%',
    }
  },
  welcomeContainer: {
    display: "flex",
    justifyContent: "space-between",
    "& h2": {
      fontSize: sizes.title,
      lineHeight: rem(82.5),
      '@media (max-width: 768px)':{
        fontSize: sizes.mobileTitle,
      }
    },
  },
  SignInLink: {
    color: "#B87514",
  },
  rightText: {
    lineHeight: rem(19.5),
    fontSize: rem(13),
  },
  welcomeText: {
    fontSize: sizes.text,
    lineHeight: rem(30),
    '@media (max-width: 768px)':{
      fontSize: sizes.base,
    }
  },
  haveAcc: {
    color: "#8D8D8D",
  },
  form: {
    width: "100%",
    marginTop: rem(20),
  },
  formItem: {
    "& .ant-form-item-label > label": {
      fontSize: rem(16),
      weight: 400,
      '@media (max-width: 768px)':{
        fontSize: sizes.mobileInputLabel,
      }
    },
  },
  inputLarge: {
    width: "100%",
    height: rem(57),
    borderRadius: sizes.signInputRadius,
    "&::placeholder": {
      color: colors.inputTextColor,
      '@media (max-width: 768px)':{
        fontSize: sizes.mobileInputLabel,
      }
    },
  },
  inlineFields: {
    display: "flex",
    justifyContent: "space-between",
    gap: rem(16),
  },
  inlineItem: {
    flex: 1,
    fontSize: rem(16),
    "& input": {
      height: rem(57),
    },
  },
  signUpButton: {
    backgroundColor: "#FFA500",
    borderColor: "#FFA500",
    color: "#fff",
    marginTop: rem(30),
  },
};

export const useSignUpStyles = createUseStyles(styles);
