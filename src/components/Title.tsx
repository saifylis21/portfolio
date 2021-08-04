import React, { useState, useEffect } from "react";
import sanityClient from "../client";

import { TitleContent } from "../models/titleContent.model";
import classes from "./Title.module.css";

const Title: React.FC = () => {
  const [titleData, setTitleData] = useState<TitleContent | null>(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "titleContent"] {
            mainTitle1,
            mainTitle2,
            mainTitle3,
            myName
          }`
      )
      .then((response) => {
        console.log(response);
        setTitleData(response[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className={classes.Title}>
      <div className={`${classes.my_name} ${classes.fade_in}`}><h5>{titleData?.myName}</h5></div>
      <div className={classes.title_container}>
        <h1>
          <div className={`${classes.t_c_1} ${classes.fade_in}`}>THANK YOU</div>
          <div className={`${classes.t_c_2} ${classes.fade_in}`}>FOR INVADING</div>
          <div className={`${classes.t_c_3} ${classes.fade_in}`}>MY SPACE</div>
        </h1>
      </div>
    </div>
  );
};

export default Title;
