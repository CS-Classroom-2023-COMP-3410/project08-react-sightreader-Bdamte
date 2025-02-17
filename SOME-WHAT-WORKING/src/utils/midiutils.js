const scales = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];

export const midiNumberToOctave = (number) => {
  return Math.floor(number / 12) - 1;
};

export const midiNumberToScale = (number) => {
  return scales[number % 12];
};

export const midiNumberToString = (number) => {
  return number ? midiNumberToScale(number) + midiNumberToOctave(number) : "-";
};
