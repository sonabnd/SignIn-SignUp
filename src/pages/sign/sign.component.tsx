import { useSignStyles } from "./sign.style";
import leftImg from "../../assets/images/statics/Saly-3.png";
import rightImg from "../../assets/images/statics/Saly-2.png";

const SignComponent = () => {
  const classes = useSignStyles();
  return (
    <div className={classes.signContainer}>
      <div className={classes.leftSide}>
        <p className={classes.logo}>Your Logo</p>
        <div className={classes.leftImg}>
          <img src={leftImg} alt="img" />
        </div>
      </div>
      <div className={classes.rightImgContainer}>
        <img src={rightImg} alt="img" />
      </div>
    </div>
  );
};

export default SignComponent;
