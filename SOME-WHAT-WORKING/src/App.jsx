import React, { useState } from "react";
import SheetMusic from "./components/MusicRenderer";
import PitchDetector from "./components/PitchDetector";
import GameControls from "./components/Controls";

const abcNotation = `
X:1
T:Simple Scale
M:4/4
L:1/4
K:C
C D E F | G A B c | c B A G | F E D C |]`;

export default function App() {
  const [expectedNotes, setExpectedNotes] = useState([]);
  const [correctNotes, setCorrectNotes] = useState(0);
  const [totalNotes, setTotalNotes] = useState(0);

  const handlePitchDetected = (detectedMidi) => {
    if (expectedNotes.length > 0) {
      const expectedMidi = expectedNotes[0]?.midiPitch;
      setTotalNotes(prev => prev + 1);
      if (detectedMidi === expectedMidi) {
        setCorrectNotes(prev => prev + 1);
      }
    }
  };

  return (
    <div>
      <h1>ABC Sight Reader</h1>
      <SheetMusic abcNotation={abcNotation} onNoteChange={setExpectedNotes} />
      <PitchDetector expectedNotes={expectedNotes} onPitchDetected={handlePitchDetected} />
      <ScoreDisplay correctNotes={correctNotes} totalNotes={totalNotes} />
      <GameControls onStart={() => setTotalNotes(0)} onReset={() => setCorrectNotes(0)} />
    </div>
  );
}
