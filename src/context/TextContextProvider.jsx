import { useState } from "react";
import TextContext from "./TextContext";

// countWords
// countSentences
// countParagraph
// countPronouns
// findLongestWord
// calculateReadingTime

export default function TextContextProvider({children}){
    const [textDetails, setTextDetails] = useState({
        Words:0,
        Sentences:0,
        Paragraph:0,
        Pronouns:0,
        LongestWord:'',
        ReadingTime:'',
    });
    return(
        <TextContext.Provider value={{textDetails, setTextDetails}}>
            {children}
        </TextContext.Provider>
    )
}