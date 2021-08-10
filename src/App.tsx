import LocomotiveScroll from "locomotive-scroll";
import { useEffect } from "react";

import useApiHook from "./custom-hooks/useApiHook";
import Title from "./components/Title/Title";
import AboutMe from "./components/AboutMe/AboutMe";

function App() {
  const { titleData, aboutMe } = useApiHook();

  useEffect(() => {
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
      </div>
    </>
  );
}

export default App;
