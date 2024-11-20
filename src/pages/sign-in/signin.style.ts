import { createUseStyles } from 'react-jss';
import { rem } from '../../assets/styles/abstracts/functions';
import sizes from '../../assets/styles/abstracts/sizes';
import colors from '../../assets/styles/abstracts/color';
import { breakpoint } from '../../assets/styles/abstracts/mixins';

const styles = {
  signModal: {
    width: rem(539),
    height: rem(741),
    borderRadius: sizes.signBorderRadius,
    backgroundColor: colors.signModalColor,
    position: 'absolute',
    top: rem(48),
    left: sizes.signModal,
    transform: 'translateX(-50%)',
    boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
    padding: rem(36),
    [breakpoint(sizes.mobileMediaSize)]: {
      width: '90%',
    },
  },
  welcomeText: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: rem(40),
    '& p': {
      fontSize: sizes.text,
      [breakpoint(sizes.mobileMediaSize)]:{
            fontSize: rem(16),
        }
    },
    '& h2': {
      fontSize: sizes.title,
      lineHeight: rem(82.5),
      [breakpoint(sizes.mobileMediaSize)]:{
            fontSize: sizes.mobileTitle,
        }   
    },
  },
  inputLarge: {
    width: sizes.maxWidth,
    height: rem(57),
    borderRadius: sizes.signInputRadius,
    '&::placeholder': {
      color: colors.inputTextColor,
      [breakpoint(sizes.mobileMediaSize)]: {
        fontSize: sizes.mobilePlaceholder,
      },
    },
  },
  orText: {
    textAlign: 'center',
    marginBottom: rem(24),
    marginTop: rem(24),
    
  },
  signInButton: {
    backgroundColor: colors.signInBgColor,
    borderColor: colors.signInBgColor,
    color: colors.buttonColor,
    [breakpoint(sizes.mobileMediaSize)]:{
        fontSize: rem(sizes.pcLittleText)
    }
  },
  signUpButton: {
    backgroundColor: colors.signUpButtonInSignIn,
    borderColor: colors.signUpButtonInSignIn,
    color: colors.signUpButtonColor,
    boxShadow: '0px 0px 0px 0px',
    [breakpoint(sizes.mobileMediaSize)]:{
        fontSize: rem(sizes.pcLittleText)
    }
  },
  formItem: {
    '& .ant-form-item-label > label': {
      fontSize: rem(sizes.pcLittleText),
      weight: sizes.thinWeight,
      [breakpoint(sizes.mobileMediaSize)]: {
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
    color: colors.forgotTextColor,
    cursor: 'pointer',
    [breakpoint(sizes.mobileMediaSize)]:{
        fontSize: rem(sizes.mobileLitteText)
    }
  },
  forgotPassContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
};

export const useSignInStyles = createUseStyles(styles);
