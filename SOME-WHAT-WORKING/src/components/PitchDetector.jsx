import { useEffect, useState } from "react";
import * as p5 from "p5";
import ml5 from "ml5";

const PitchDetector = () => {
  const [pitch, setPitch] = useState(null);

  useEffect(() => {
    let mic, pitchDetector;

    const sketch = (p) => {
      p.setup = () => {
        p.noCanvas();
        mic = new p5.AudioIn();
        mic.start(() => {
          pitchDetector = ml5.pitchDetection(
            "https://cdn.jsdelivr.net/gh/ml5js/ml5-data-and-models@main/models/pitch-detection/crepe/",
            p.getAudioContext(),
            mic.stream,
            modelLoaded
          );
        });
      };

      const modelLoaded = () => {
        pitchDetector.getPitch((err, frequency) => {
          if (frequency) setPitch(frequency.toFixed(2));
        });
      };
    };

    new p5(sketch);
  }, []);

  return <div>Detected Pitch: {pitch ? `${pitch} Hz` : "Listening..."}</div>;
};

export default PitchDetector;
