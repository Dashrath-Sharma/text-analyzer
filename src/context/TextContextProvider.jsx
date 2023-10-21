import { useState } from "react";
import TextContext from "./TextContext";

export default function TextContextProvider({ children }) {
  const [textDetails, setTextDetails] = useState({
    Words: 0,
    Characters: 0,
    Sentences: 0,
    Paragraphs: 0,
    Pronouns: 0,
    LongestWord: "",
    ReadingTime: "",
  });
  return (
    <TextContext.Provider value={{ textDetails, setTextDetails }}>
      {children}
    </TextContext.Provider>
  );
}
