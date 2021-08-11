import LocomotiveScroll from "locomotive-scroll";
import { useEffect } from "react";

import useApiHook from "./custom-hooks/useApiHook";
import Title from "./components/Title/Title";
import AboutMe from "./components/AboutMe/AboutMe";
import Skills from "./components/Skills/Skills";

function App() {
  const { titleData, aboutMe, skills } = useApiHook();

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
      </div>
    </>
  );
}

export default App;
