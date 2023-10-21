
// countWords
// countSentences
// countParagraph
// countPronouns
// findLongestWord
// calculateReadingTime

import { useContext, useState } from "react"
import TextContext from "../context/TextContext";

export default function WritingArea(){
    const [text, setText] = useState('');
    const {setTextDetails} = useContext(TextContext);

    const getText = (e) => {
        setText(e.target.value)
        console.log(text)
    }
      
    return(
        <textarea className="text-area" value={text} onChange={getText} placeholder="Paste your text here..."></textarea>
    )
}