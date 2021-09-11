import { useState } from "react";

import useApiHook from "./custom-hooks/useApiHook";
import Title from "./components/Title/Title";
import AboutMe from "./components/AboutMe/AboutMe";
import Skills from "./components/Skills/Skills";
import Contacts from "./components/Contacts/Contacts";
import Spinner from "./components/Spinner/Spinner";

function App() {
  const { titleData, aboutMe, skills, contacts } = useApiHook();
  console.log(titleData, aboutMe, skills, contacts, 'got em!!!');

  const [isHide, setIsHide] = useState(true);

  setTimeout(() => {
    setIsHide(false);
  }, 5000);

  return (
    <>
      {!isHide ? (
        <>
          <Title titleData={titleData} />
          <AboutMe aboutMe={aboutMe} />
          <Skills skills={skills} />
          <Contacts contacts={contacts} />
        </>
      ) : (
        <Spinner />
      )}
    </>
  );
}

export default App;
