import { createUseStyles } from 'react-jss';
import sizes from '../../../assets/styles/abstracts/sizes';
import colors from '../../../assets/styles/abstracts/color';
import { rem } from '../../../assets/styles/abstracts/functions';
import { breakpoint } from '../../../assets/styles/abstracts/mixins';

const styles = {
  signContainer: {
    height: '100vh',
    [breakpoint(sizes.mobileMediaSize)]: {
      backgroundColor: colors.mainBg,
    },
  },
  leftSide: {
    backgroundColor: colors.mainBg,
    width: sizes.leftSide,
    height: '100%',
    paddingTop: rem(31),
    [breakpoint(sizes.mobileMediaSize)]: {
      display: 'none',
    },
  },
  logo: {
    fontSize: sizes.text,
    color: colors.logoColor,
    marginLeft: rem(42),
  },
  leftImg: {
    marginTop: rem(193),
    marginLeft: rem(200),
  },
  rightImgContainer: {
    position: 'absolute',
    right: rem(60),
    top: rem(144),
  },
};

export const useSignStyles = createUseStyles(styles);
