import { Resume } from "./resume/Resume";
import "./App.css";
import { useState } from "react";

const text =
  "You can save this as PDF! Right click on the page, then select 'Print'. Ensure 'Destination' is 'Save as PDF', and that 'Margins' is set to 'None'.";

function App() {
  const [showToolTip, setToolTip] = useState(false);

  return (
    <>
      <div className="page">
        <Resume />
      </div>
      <div
        className="tool-tip"
        onMouseEnter={() => setToolTip(true)}
        onMouseLeave={() => setToolTip(false)}
      >
        {showToolTip ? (
          text
        ) : (
          <span style={{ fontSize: "20px", fontWeight: 600 }}>?</span>
        )}
      </div>
    </>
  );
}

export default App;
