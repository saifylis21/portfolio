import React from "react";

// import classes from "./MyInfo.module.css";
// import MyInfoContent from '../../models/MyInfoContent';

type MyInfoProps = {
  myInfo: any | null;
};

const MyInfo: React.FC<MyInfoProps>  = (props) => (
  <div className="MyInfo">
    <h1>jfsdunfjksdankjfdsjk</h1>
  </div>
  // <div className={classes.MyInfo}>
  //   <h1>{props.myInfo?.aboutMeHeading}</h1>
  //   <p>
  //     {props.myInfo?.aboutMeText1}
  //     Hello and welcome! I'm a digital designer and web developer based in
  //     Pakistan, specializing <strong>UI/UX design</strong> and{" "}
  //     <strong>web development.</strong>
  //   </p>
  //   <br />
  //   <p>
  //     I took the Cambridge A-level exams from Roots International Schools. The
  //     subjects I excel in are <strong>Computer Science, Mathematics</strong> and <strong>Physics.</strong> Now, I
  //     am a university student of National University of Computer
  //     and Emerging Sciences (FAST) doing bachelors in Artificial Intelligence.
  //   </p>
  // </div>
);

export default MyInfo;
