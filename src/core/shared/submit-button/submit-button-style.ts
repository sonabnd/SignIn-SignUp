import { createUseStyles } from "react-jss";
import sizes from "../../../assets/styles/abstracts/sizes";
import { rem } from "../../../assets/styles/abstracts/functions";

const styles = {
    button: {
      width: '100%',
      height: rem(50),
      fontSize: sizes.pcLittleText,
      fontWeight: sizes.mediumFontWeight,
      boxShadow: '0px 4px 19px 0px #7793414D',
    },
  };

export const useButtonStyles = createUseStyles(styles)
