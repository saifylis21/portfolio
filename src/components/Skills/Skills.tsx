import React from "react";

import classes from "./Skills.module.css";
import SkillsContent from "../../models/SkillsContent";
import PortableText from "react-portable-text";

type SkillsProps = {
  skills: SkillsContent | null;
};

const Skills: React.FC<SkillsProps> = ({ skills }) => (
  <section>
    <div className={classes.Skills}>
      <h1>{skills?.skillsHeading}</h1>
      {skills && (
        <PortableText
          content={skills?.skillsText as [object]}
          className={classes.skillText}
          serializers={{}}
        />
      )}
      <h1>{skills?.skillsToolsHeading}</h1>
      {skills && (
        <PortableText
          content={skills?.skillsTools as [object]}
          className={classes.toolsList}
          serializers={{}}
        />
      )}
    </div>
  </section>
);

export default Skills;
