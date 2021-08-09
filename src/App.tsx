import "./App.css";

import useApiHook from "./custom-hooks/useApiHook";
import Title from "./components/Title/Title";
import MyInfo from './components/MyInfo/MyInfo';
// import PortableText from '@sanity/block-content-to-react';
// import PortableText from "react-portable-text";
// import doc from "./doc.json";

function App() {
  const { titleData, myInfo } = useApiHook();

  return (
    <>
      <Title titleData={titleData} />
      <MyInfo myInfo={myInfo}/>
    </>
  );
}

export default App;

