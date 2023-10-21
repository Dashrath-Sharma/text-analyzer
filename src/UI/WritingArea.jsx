// countWords
// countSentences
// countParagraph
// countPronouns
// findLongestWord
// calculateReadingTime

import { useContext, useEffect, useState } from "react";
import TextContext from "../context/TextContext";
import {
  countWords,
  countCharacters,
  countSentences,
  countParagraphs,
  countPronouns,
  getReadingTime,
  getLongestWord,
} from "../Utils";

export default function WritingArea() {
  const [text, setText] = useState("");
  const { setTextDetails } = useContext(TextContext);

  const getText = (e) => {
    setText(() => e.target.value);
  };

  useEffect(() => {
    if (text == '') {
      setTextDetails(() => ({
        Words: 0,
        Characters: 0,
        Sentences: 0,
        Paragraphs: 0,
        Pronouns: 0,
        LongestWord: '',
        ReadingTime: '',
      }));
      return;
    };
    setTextDetails((x) => ({
      Words: countWords(text),
      Characters: countCharacters(text),
      Sentences: countSentences(text),
      Paragraphs: countParagraphs(text),
      Pronouns: countPronouns(text),
      LongestWord: getReadingTime(text),
      ReadingTime: getLongestWord(text),
    }));
  }, [text]);

  return (
    <textarea
      className="text-area"
      value={text}
      onChange={getText}
      placeholder="Paste your text here..."
    ></textarea>
  );
}
