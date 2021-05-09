import { useRef, useState, useEffect } from "react";
import { Body } from "./body/Body";
import routes from "./routes";
import "./App.css";
import { useWindowDimensions } from "./hooks";

const MOBILE_WIDTH_BREAKPOINT = 800;

function App() {
  const [width] = useWindowDimensions();
  const pageRef = useRef(null);
  const [layout, setLayout] = useState<"desktop" | "mobile">("desktop");
  const [isMobileNavActive, setIsMobileNavActive] = useState(false);

  useEffect(() => {
    if (width <= MOBILE_WIDTH_BREAKPOINT) {
      setLayout("mobile");
    } else {
      setLayout("desktop");
      if (isMobileNavActive) {
        setIsMobileNavActive(false);
      }
    }
  }, [width, isMobileNavActive]);

  const handleMobileNavToggle = (toggle: boolean) => {
    setIsMobileNavActive(toggle);
  };

  return (
    <div className="page" ref={pageRef}>
      <Body
        pageRef={pageRef}
        PageToRender={routes[0].component}
        layout={layout}
        handleMobileNavToggle={handleMobileNavToggle}
      />
    </div>
  );
}

export default App;
