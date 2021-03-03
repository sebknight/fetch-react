import { pipe } from "ramda";

// Utility functions
// Catching edge cases where received data is weird
export const dogEdgeCases = [
  "bernard",
  "dachshund",
  "german",
  "plott",
  "pyrenees",
  "txt",
];

export const wikiEdgeCases = [
  "Affenpinscher",
  "Akita",
  "Belgian",
  "Bernard",
  "Cairn",
  "Caucausian",
  "Chihuahua",
  "Jack",
  "Keeshond",
  "Leonberg",
  "Malinois",
  "Maltese",
  "Merrill",
  "mix",
  "mixed",
  "Old English Bulldog",
  "Pyrenees",
  "Siberian",
];

export const isEdgeCase = (cases, str) => cases.some((c) => str.includes(c));

// Sanitise snippet
const scrubHTML = (snippet) =>
  snippet.replace(/<\/?[a-z][a-z0-9]*[^<>]*>/gi, "");
const escQuotes = (snippet) => snippet.replace(/&quot;/gi, '"');

// Some snippets don't have a period, some start mid-sentence
const firstSentence = (snippet) =>
  snippet.indexOf(".") === -1
    ? "No facts found, but that's a great dog!"
    : // Get sentence and insert period
      `${snippet.substring(0, snippet.indexOf("."))}.`;

// Setting a reasonable default to reduce garbage output
const checkLength = (snippet) =>
  snippet.length <= 20
    ? (snippet = "No facts found, but that's a great dog!")
    : snippet;

export const cleanSnippet = (snippet) =>
  pipe(scrubHTML, escQuotes, firstSentence, checkLength)(snippet);

// Remove anything in brackets
export const cleanTitle = (title) => title.replace(/ *\([^)]*\) */g, "");

export const getBreed = (path) => {
  const pathArr = path.split("/");
  const breedIndex = pathArr[4];
  return breedIndex.replace("-", "%20");
};
