import { createUseStyles } from 'react-jss';
import colors from '../../assets/styles/abstracts/color';
import { rem } from '../../assets/styles/abstracts/functions';
import sizes from '../../assets/styles/abstracts/sizes';
import { breakpoint } from '../../assets/styles/abstracts/mixins';

const styles = {
  homepageContainer: {
    width: sizes.maxWidth,
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.mainBg,
  },
  homeLeftSide: {
    backgroundColor: colors.mainBg,
    width: '50%',
    height: '100%',
    [breakpoint(sizes.mobileMediaSize)]: {
      display: 'none',
    },
  },
  welcomeContainer: {
    width: '90%',
    height: rem(741),
    boxShadow: '0px 4px 35px 0px #00000014',
    position: 'absolute',
    backgroundColor: colors.signModalColor,
    borderRadius: sizes.homepageBorderRadius,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [breakpoint(sizes.mobileMediaSize)]: {
      width: '90%', 
      height: rem(741), 
      top: '10%',
      left: '5%',
    },
  },
  welcomeTextContainer: {
    width: rem(451),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& h3': {
      fontSize: sizes.title,
      fontWeight: sizes.mediumFontWeight,
    },
    '& h2': {
      fontSize: sizes.title,
      color: colors.mainColor,
      marginTop: rem(16),
      marginBottom: rem(82.5),
      fontWeight: sizes.mediumFontWeight,
    },
    [breakpoint(sizes.mobileMediaSize)]: {
      width: '90%', 
      '& h3': {
        fontSize: sizes.mobileTitle, 
      },
      '& h2': {
        fontSize: sizes.mobileTitle,
        marginTop: rem(12),
        marginBottom: rem(200),
      },
    },
  },
  logOutButton: {
    backgroundColor: colors.mainColor,
    color: colors.signModalColor,
    fontWeight: sizes.thinWeight,
    textAlign: 'center',
    [breakpoint(sizes.mobileMediaSize)]: {
      width: '70%', 
    },
  },
};

export const useHomepageStyles = createUseStyles(styles);
