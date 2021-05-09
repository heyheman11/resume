import { useEffect, useState } from "react";
import { debounce } from "lodash";

/**
 * Captures height and width of window.
 *
 * @returns [width, height]
 */
export function useWindowDimensions() {
  const [dimensions, setDimensions] = useState({ height: 0, width: 0 });
  useEffect(() => {
    setDimensions({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  useEffect(() => {
    const captureWindow = debounce(() => {
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
    }, 350);
    window.addEventListener("resize", captureWindow);
    return () => window.removeEventListener("resize", captureWindow);
  }, []);

  return [dimensions.width, dimensions.height];
}
