import { useState, useEffect } from "react";
import sanityClient from "../client";
import TitleContent from "../models/TitleContent";
import AboutMeContent from "../models/AboutMeContent";

const useApiHook = () => {
  const [titleData, setTitleData] = useState< TitleContent | null >(null);
  const [aboutMe, setAboutMe] = useState< AboutMeContent | null >(null);

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

  useEffect(() => {
    fetchTitleData();
    fetchAboutMe();
  }, []);

  return {titleData, aboutMe};
};

export default useApiHook;
