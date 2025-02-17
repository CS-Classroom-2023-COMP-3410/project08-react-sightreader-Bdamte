import { useState } from "react";
import MusicRenderer from "./components/MusicRenderer";
import PitchDetector from "./components/PitchDetector";
import Controls from "./components/Controls";
import "./styles/App.css";

const App = () => {
  const [abcNotation, setAbcNotation] = useState("");

  return (
    <div className="app-container">
      <h1>ABC Sightreader</h1>
      <p className="status">1. Select your mic 2. Select your ABC file 3. Press start</p>
      
      <div className="controls">
        <label htmlFor="devices">Microphone:</label>
        <select id="devices"></select>

        <label htmlFor="file">File:</label>
        <select id="file">
          <option value="">---Custom ABC---</option>
                     
          <option value="beginner.pls">beginner.pls</option>
                
          <option value="cecilio-lesson1-open-strings.abc">cecilio-lesson1-open-strings.abc</option>
      
          <option value="cecilio-lesson2-first-position.abc">cecilio-lesson2-first-position.abc</option>
      
          <option value="cecilio-lesson2-twinkle-twinkle-little-star.abc">cecilio-lesson2-twinkle-twinkle-little-star.abc</option>
      
          <option value="cecilio-lesson3-exercise-1.abc">cecilio-lesson3-exercise-1.abc</option>
      
          <option value="cecilio-lesson3-exercise-2.abc">cecilio-lesson3-exercise-2.abc</option>
      
          <option value="cecilio-lesson3-exercise-3.abc">cecilio-lesson3-exercise-3.abc</option>
      
          <option value="cecilio-lesson3-exercise-4.abc">cecilio-lesson3-exercise-4.abc</option>
      
          <option value="cecilio-lesson3-jingle-bells.abc">cecilio-lesson3-jingle-bells.abc</option>
      
          <option value="cecilio-lesson3-mary-had-a-little-lamb.abc">cecilio-lesson3-mary-had-a-little-lamb.abc</option>
      
          <option value="cecilio-lesson4-camptown-races.abc">cecilio-lesson4-camptown-races.abc</option>
      
          <option value="cecilio-lesson4-lightly-row.abc">cecilio-lesson4-lightly-row.abc</option>
      
          <option value="cecilio-lesson4-russian-dance-tune.abc">cecilio-lesson4-russian-dance-tune.abc</option>
      
          <option value="cecilio-lesson5-eighth-notes.abc">cecilio-lesson5-eighth-notes.abc</option>
      
          <option value="cecilio-lesson5-hungarian-folk-song-1.abc">cecilio-lesson5-hungarian-folk-song-1.abc</option>
      
          <option value="cecilio-lesson5-the-old-gray-goose.abc">cecilio-lesson5-the-old-gray-goose.abc</option>
      
          <option value="cecilio-lesson6-first-position-d-string.abc">cecilio-lesson6-first-position-d-string.abc</option>
      
          <option value="cecilio-lesson6-ode-to-joy.abc">cecilio-lesson6-ode-to-joy.abc</option>
      
          <option value="cecilio-lesson6-scherzando.abc">cecilio-lesson6-scherzando.abc</option>
      
          <option value="cecilio-lesson7-can-can.abc">cecilio-lesson7-can-can.abc</option>
      
          <option value="cecilio-lesson7-country-gardens.abc">cecilio-lesson7-country-gardens.abc</option>
      
          <option value="cecilio-lesson7-gavotte.abc">cecilio-lesson7-gavotte.abc</option>
      
          <option value="cecilio-lesson8-dixie.abc">cecilio-lesson8-dixie.abc</option>
      
          <option value="cecilio-lesson8-largo.abc">cecilio-lesson8-largo.abc</option>
      
          <option value="hot-cross-buns.abc">hot-cross-buns.abc</option>
      
          <option value="lesson1-open-string-exercise-1.abc">lesson1-open-string-exercise-1.abc</option>
      
          <option value="lesson1-open-string-exercise-2.abc">lesson1-open-string-exercise-2.abc</option>
      
          <option value="lesson1-open-string-exercise-3.abc">lesson1-open-string-exercise-3.abc</option>
      
          <option value="lesson1-open-string-exercise-4.abc">lesson1-open-string-exercise-4.abc</option>
      
          <option value="lesson1-open-string-exercise-5.abc">lesson1-open-string-exercise-5.abc</option>
      
          <option value="lesson1-open-string-exercise-6.abc">lesson1-open-string-exercise-6.abc</option>
      
          <option value="lesson2-1st-finger-exercise-1.abc">lesson2-1st-finger-exercise-1.abc</option>
      
          <option value="lesson2-1st-finger-exercise-2.abc">lesson2-1st-finger-exercise-2.abc</option>
      
          <option value="lesson2-1st-finger-exercise-3.abc">lesson2-1st-finger-exercise-3.abc</option>
      
          <option value="lesson2-1st-finger-exercise-4.abc">lesson2-1st-finger-exercise-4.abc</option>
      
          <option value="lesson2-1st-finger-exercise-5.abc">lesson2-1st-finger-exercise-5.abc</option>
      
          <option value="lesson2-1st-finger-exercise-6.abc">lesson2-1st-finger-exercise-6.abc</option>
      
        </select>

        <label htmlFor="tempo">Tempo:</label>
        <select id="tempo">
          <option value="">inherit</option>
          <option value="30">30</option>
          <option value="60">60</option>
          <option value="90">90</option>
          <option value="120">120</option>
          <option value="180">180</option>
          <option value="240">240</option>
        </select>

        <button id="start" disabled>Start</button>
        <button id="reset">Reset</button>
        <button id="tune">Tune</button>
      </div>
      
      <MusicRenderer abcNotation={abcNotation} />
      <PitchDetector />
      <Controls setAbcNotation={setAbcNotation} />

      <div className="notation-display" id="notation"></div>
      <p>Current Note: <span id="current-note">-</span></p>
      <p>Current Volume: <span id="current-volume">-</span></p>
      <p>Loaded Filename: <span id="loaded-filename">-</span></p>
    </div>
  );
};

export default App;
