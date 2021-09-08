import { useState, useEffect } from "react";
import sanityClient from "../client";

import TitleContent from "../models/TitleContent";
import AboutMeContent from "../models/AboutMeContent";
import SkillsContent from "../models/SkillsContent";
import ContactsContent from "../models/ContactsContent";

const useApiHook = () => {
  const [titleData, setTitleData] = useState<TitleContent | null>(null);
  const [aboutMe, setAboutMe] = useState<AboutMeContent | null>(null);
  const [skills, setSkills] = useState<SkillsContent | null>(null);
  const [contacts, setContacts] = useState<ContactsContent | null>(null);

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
            },
            whatIam,
            basedIn
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
        skillsText,
        skillsToolsHeading,
        skillsTools
      }`
      )
      .then((response) => {
        setSkills(response[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function fetchContacts() {
    sanityClient
    .fetch(
      `*[_type == "contacts"] {
        contactLinks
      }`
    )
    .then((response) => {
      console.log(response[0]);
      setContacts(response[0]);
    })
    .catch((error) => {
      console.log(error);
    });
  }

  useEffect(() => {
    fetchTitleData();
    fetchAboutMe();
    fetchSkills();
    fetchContacts();
  }, []);

  return { titleData, aboutMe, skills, contacts };
};

export default useApiHook;
