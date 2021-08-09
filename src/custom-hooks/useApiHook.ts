import { useState, useEffect } from "react";
import sanityClient from "../client";
import TitleContent from "../models/TitleContent";
import MyInfoContent from "../models/MyInfoContent";

const useApiHook = () => {
  const [titleData, setTitleData] = useState< TitleContent | null >(null);
  const [myInfo, setMyInfo] = useState< MyInfoContent | null >(null);

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

  function fetchMyInfo() {
    sanityClient
    .fetch(
      `*[_type == "myInfo"] {
        aboutMeHeading,
        aboutMeText1,
        aboutMeText2
      }`
    )
    .then((response) => {
      console.log(response[0]);
      setMyInfo(response[0]);
    })
    .catch((error) => {
      console.log(error);
    });
  }

  useEffect(() => {
    fetchTitleData();
    fetchMyInfo();
  }, []);

  return {titleData, myInfo};
};

export default useApiHook;
