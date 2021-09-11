import React from "react";

import TitleContent from "../../models/TitleContent";
import classes from "./Title.module.css";

type TitleProps = {
  titleData: TitleContent | null;
};

const Title: React.FC<TitleProps> = (props) => (
  <>
    <section>
      <div className={classes.Title}>
        <div className={`${classes.my_name} ${classes.fade_in}`}>
          <h5>{props.titleData?.myName}</h5>
        </div>
        <div className={classes.title_container}>
          <h1>
            <div className={classes.t_c_1}>{props.titleData?.mainTitle1}</div>
            <div className={classes.t_c_2}>{props.titleData?.mainTitle2}</div>
            <div className={classes.t_c_3}>{props.titleData?.mainTitle3}</div>
          </h1>
        </div>
      </div>
    </section>

    <section>
      <div className={classes.picture_container}>
        <div>{props.titleData?.whatIam}</div>
        <div>
          <img  src={props.titleData?.myPicture.asset.url} alt="..." />
        </div>
        <div>{props.titleData?.basedIn}</div>
      </div>
    </section>
  </>
);

export default Title;
