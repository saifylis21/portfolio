import React from "react";

import classes from "./AboutMe.module.css";
import AboutMeContent from "../../models/AboutMeContent";
import PortableText from "react-portable-text";

type AboutMeProps = {
  aboutMe: AboutMeContent | null;
};

const AboutMe: React.FC<AboutMeProps> = ({ aboutMe }) => (
  <section>
    <div className={classes.AboutMe}>
      <h1>{aboutMe?.aboutMeHeading}</h1>

        {aboutMe && (
          <PortableText
            content={aboutMe.aboutMeText1 as [object]}
            className={"dummyStyles"}
            serializers={{}}
          />
        )}
      <br />
        {aboutMe && (
          <PortableText
            content={aboutMe.aboutMeText2 as [object]}
            className={"dummyStyles"}
            serializers={{}}
          />
        )}
    </div>
  </section>
);

export default AboutMe;
