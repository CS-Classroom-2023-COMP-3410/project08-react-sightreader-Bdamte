import { useEffect, useRef } from "react";
import ABCJS from "abcjs";

const MusicRenderer = ({ abcNotation }) => {
  const abcContainerRef = useRef(null);

  useEffect(() => {
    if (abcContainerRef.current) {
      ABCJS.renderAbc(abcContainerRef.current, abcNotation);
    }
  }, [abcNotation]);

  return <div ref={abcContainerRef} className="music-container"></div>;
};

export default MusicRenderer;
