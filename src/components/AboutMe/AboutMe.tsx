import React from "react";

import classes from "./AboutMe.module.css";
import AboutMeContent from "../../models/AboutMeContent";
import PortableText from "react-portable-text";

type AboutMeProps = {
  aboutMe: AboutMeContent | null;
};

const AboutMe: React.FC<AboutMeProps> = ({ aboutMe }) => (
  <section data-scroll-section>
    <div data-scroll data-scroll-speed="2" data-scroll-class={classes.scrollClass} className={classes.AboutMe}>
      <h1>{aboutMe?.aboutMeHeading}</h1>

      <p>
        {aboutMe && (
          <PortableText
            content={aboutMe.aboutMeText1 as [object]}
            className={"dummyStyles"}
            serializers={{}}
          />
        )}
      </p>
      <br />
      <p>
        {aboutMe && (
          <PortableText
            content={aboutMe.aboutMeText2 as [object]}
            className={"dummyStyles"}
            serializers={{}}
          />
        )}
      </p>
    </div>
  </section>
);

export default AboutMe;
