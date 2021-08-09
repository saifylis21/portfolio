import React from "react";

import classes from "./MyInfo.module.css";
import MyInfoContent from "../../models/MyInfoContent";
import PortableText from "react-portable-text";

type MyInfoProps = {
  myInfo: MyInfoContent | null;
};

const MyInfo: React.FC<MyInfoProps> = ({ myInfo }) => {
  // let showText1 = null;
  // if (props.myInfo?.aboutMeText1) {
  //   showText1 = <PortableText
  //     content={props.myInfo.aboutMeText1 as [object]}
  //     className={"styles"}
  //     serializers={{}}
  //   />;
  // }

  // let showText2 = null;
  // if (props.myInfo?.aboutMeText2) {
  //   showText2 = <PortableText
  //     content={props.myInfo.aboutMeText2 as [object]}
  //     className={"styles"}
  //     serializers={{}}
  //   />;
  // }

  return (
    <div className={classes.MyInfo}>
      <h1>{myInfo?.aboutMeHeading}</h1>

      <p>
        {myInfo && (
          <PortableText
            content={myInfo.aboutMeText1 as [object]}
            className={"dummyStyles"}
            serializers={{}}
          />
        )}
      </p>
      <br />
      <p>
        {myInfo && (
          <PortableText
            content={myInfo.aboutMeText2 as [object]}
            className={"dummyStyles"}
            serializers={{}}
          />
        )}
      </p>
    </div>
  );
};

export default MyInfo;
