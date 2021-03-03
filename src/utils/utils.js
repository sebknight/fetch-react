import { pipe } from "ramda";

// Utility functions
// Catching edge cases where received data is weird
export const dogEdgeCases = ["txt", "plott", "bernard", "german", "pyrenees"];

export const wikiEdgeCases = [
  "Affenpinscher",
  "Akita",
  "Belgian",
  "Bernard",
  "Cairn",
  "Caucausian",
  "Chihuahua",
  "Keeshond",
  "Jack",
  "Leonberg",
  "Merrill",
  "Malinois",
  "mixed",
  "Old English Bulldog",
  "Pyrenees",
  "Siberian",
];

export const isEdgeCase = (cases, str) => cases.some((c) => str.includes(c));

// Sanitise snippet and return first sentence
const scrubHTML = (snippet) =>
  snippet.replace(/<\/?[a-z][a-z0-9]*[^<>]*>/gi, "");
const escQuotes = (snippet) => snippet.replace(/&quot;/gi, '"');
const firstSentence = (snippet) => snippet.substring(0, snippet.indexOf("."));

export const cleanSnippet = (snippet) =>
  pipe(scrubHTML, escQuotes, firstSentence)(snippet);

// Remove anything in brackets
export const cleanTitle = (title) => title.replace(/ *\([^)]*\) */g, "")

export const getBreed = (path) => {
  const pathArr = path.split("/");
  const breedIndex = pathArr[4];
  return breedIndex.replace("-", "%20");
};
