import LocomotiveScroll from "locomotive-scroll";
import { useEffect } from "react";

import useApiHook from "./custom-hooks/useApiHook";
import Title from "./components/Title/Title";
import AboutMe from "./components/AboutMe/AboutMe";
import Skills from "./components/Skills/Skills";
import Contacts from "./components/Contacts/Contacts";

function App() {
  const { titleData, aboutMe, skills, contacts } = useApiHook();

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const scroll = new LocomotiveScroll({
      el: document.querySelector("[data-scroll-container]"),
      smooth: true,
      multiplier: .5
    });
  }, []);

  return (
    <>
      <div data-scroll-container>
        <Title titleData={titleData} />
        <AboutMe aboutMe={aboutMe} />
        <Skills skills={skills} />
        <Contacts contacts={contacts} />
      </div>
    </>
  );
}

export default App;
