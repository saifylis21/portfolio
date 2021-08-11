import { useState, useEffect } from "react";
import sanityClient from "../client";

import TitleContent from "../models/TitleContent";
import AboutMeContent from "../models/AboutMeContent";
import SkillsContent from "../models/SkillsContent";

const useApiHook = () => {
  const [titleData, setTitleData] = useState<TitleContent | null>(null);
  const [aboutMe, setAboutMe] = useState<AboutMeContent | null>(null);
  const [skills, setSkills] = useState<SkillsContent | null>(null);

  function fetchTitleData() {
    sanityClient
      .fetch(
        `*[_type == "titleContent"] {
            myName,
            mainTitle1,
            mainTitle2,
            mainTitle3,
            myPicture {
              asset->{
                _id,
                url
              }
            }
          }`
      )
      .then((response) => {
        setTitleData(response[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function fetchAboutMe() {
    sanityClient
      .fetch(
        `*[_type == "aboutMe"] {
        aboutMeHeading,
        aboutMeText1,
        aboutMeText2
      }`
      )
      .then((response) => {
        console.log(response[0]);
        setAboutMe(response[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function fetchSkills() {
    sanityClient
      .fetch(
        `*[_type == "skills"] {
        skillsHeading,
        skillsText
      }`
      )
      .then((response) => {
        console.log(response[0]);
        setSkills(response[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    fetchTitleData();
    fetchAboutMe();
    fetchSkills();
  }, []);

  return { titleData, aboutMe, skills };
};

export default useApiHook;
