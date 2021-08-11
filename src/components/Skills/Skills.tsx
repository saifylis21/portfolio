import React from "react";

import classes from "./Skills.module.css";
import SkillsContent from "../../models/SkillsContent";
import PortableText from "react-portable-text";

type SkillsProps = {
  skills: SkillsContent | null;
};

const Skills: React.FC<SkillsProps> = ({ skills }) => (
  <section data-scroll-section>
    <div
      data-scroll
      data-scroll-speed="2"
      data-scroll-class={classes.scrollClass}
      className={classes.Skills}
    >
      <h1>{skills?.skillsHeading}</h1>
      <p>
        {skills && (
          <PortableText
            content={skills?.skillsText as [object]}
            className="dummyStyles"
            serializers={{}}
          />
        )}
      </p>
    </div>
  </section>
);

export default Skills;
