import { useRef, useEffect } from "react";
import Page from "./page";

function App() {
  const scrollPositionRef = useRef(0);

  const handleScroll = () => {
    console.log(scrollPositionRef);
    scrollPositionRef.current = window.scrollY;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    console.log("scrollPositionRef", scrollPositionRef);
  }, [window.scrollY]);

  return (
    <Page>
      <button onClick={handleScroll}>Click</button>
      <p style={{ height: 10000 }}></p>
    </Page>
  );
}

export default App;
