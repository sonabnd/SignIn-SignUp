import { useHomepageStyles } from "./home.style";
import ButtonComponent from "../../core/shared/submit-button/submit-button.component";
import { en } from "../../assets/lang/en";
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import { Routes } from "../../router/router";
import { useNavigate } from "react-router-dom";
import { getToken } from "../../core/helpers/get-token";
import { payload } from "./home";

const HomeComponent = () => {
  const navigate = useNavigate();
  const classes = useHomepageStyles();
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const token = getToken();
    if (token) {
      try {
        const decodedToken: payload = jwtDecode(token);
        setUserName(decodedToken.username);
      } catch (error) {
        console.error(error);
      }
    }
  }, []);


  const onClick = () => {
    localStorage.removeItem("tokenName");
    navigate(Routes.signin);
  };
  return (
    <div className={classes.homepageContainer}>
      <div className={classes.homeLeftSide}></div>
      <div className={classes.welcomeContainer}>
        <div className={classes.welcomeTextContainer}>
          <h3>Welcome</h3>
          <h2>{userName}</h2>
          <ButtonComponent className={classes.logOutButton} onClick={onClick}>
            {en.logout}
          </ButtonComponent>
        </div>
      </div>
    </div>
  );
};

export default HomeComponent;
