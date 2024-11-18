import { createUseStyles } from "react-jss";

const styles = {
    button: {
      width: "100%",
      height: "50px",
      fontSize: "16px",
      fontWeight: "500",
      boxShadow: '0px 4px 19px 0px #7793414D',
    },
  };

export const useButtonStyles = createUseStyles(styles)
