// countWords
// countSentences
// countParagraph
// countPronouns
// findLongestWord
// calculateReadingTime

import { pronounsObject } from "../data";

export function countWords(string) {
  return string.match(/\b[^\s\n]+\b/gm).length;
}

export function countCharacters(string) {
  return string.split('').length;
}

export function countSentences(string) {
  return string.split(/\./gm).length;
}

export function countParagraphs(string) {
    return string.split(/\n+/gm).length;
}

export function countPronouns(string) {
  return string
    .match(/[a-z]+/gim)
    .reduce((s, x) => (s += pronounsObject[x.toLowerCase()] ? 1 : 0), 0);
}

export function getReadingTime(string) {
  const minutes = Math.ceil(countWords(string)/200);
    return minutes>1 ? `~ ${minutes} minutes` : `~ ${minutes} minute`;
}

export function getLongestWord(string) {
    string = string.split(/\s/gmi)
    const logestWord = string.reduce((s,x) => {
        let len = x.length;
        let slen = s?.length;
       return slen<len ? x : s;
      },'');
      return logestWord;
}
