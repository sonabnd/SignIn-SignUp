import { createUseStyles } from 'react-jss';
import colors from '../../assets/styles/abstracts/color';
import { rem } from '../../assets/styles/abstracts/functions';
import sizes from '../../assets/styles/abstracts/sizes';
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
    [breakpoint(sizes.mobileMediaSize)]:{
      width: '90%',
    }
  },
  welcomeContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    '& h2': {
      fontSize: sizes.title,
      lineHeight: rem(82.5),
      [breakpoint(sizes.mobileMediaSize)]:{
        fontSize: sizes.mobileTitle,
      }
    },
  },
  SignInLink: {
    color: colors.signInLinkColor,
  },
  rightText: {
    lineHeight: rem(19.5),
    fontSize: rem(13),
  },
  welcomeText: {
    fontSize: sizes.text,
    lineHeight: rem(30),
    [breakpoint(sizes.mobileMediaSize)]:{
      fontSize: sizes.base,
    }
  },
  haveAcc: {
    color: colors.haveAccTextColor,
  },
  form: {
    width: sizes.maxWidth,
    marginTop: rem(20),
  },
  formItem: {
    '& .ant-form-item-label > label': {
      fontSize: rem(sizes.pcLittleText),
      weight: sizes.thinWeight,
      [breakpoint(sizes.mobileMediaSize)]:{
        fontSize: sizes.mobileInputLabel,
      }
    },
  },
  inputLarge: {
    width: sizes.maxWidth,
    height: rem(57),
    borderRadius: sizes.signInputRadius,
    '&::placeholder': {
      color: colors.inputTextColor,
      [breakpoint(sizes.mobileMediaSize)]:{
        fontSize: sizes.mobileInputLabel,
      }
    },
  },
  inlineFields: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: rem(16),
  },
  inlineItem: {
    flex: 1,
    fontSize: rem(16),
    '& input': {
      height: rem(57),
    },
  },
  signUpButton: {
    backgroundColor: colors.signInBgColor,
    borderColor: colors.signInBgColor,
    color: colors.buttonColor,
    marginTop: rem(30),
  },
};

export const useSignUpStyles = createUseStyles(styles);
