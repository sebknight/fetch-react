import { pipe } from 'ramda';

// Utility functions
// Dog functions

// Catching instances where Dog API servces wrong format or breed snippet is weird
const dogEdgeCases = ['txt', 'plott', 'bernard', 'germanshepherd', 'pyrenees'];
export const isDogEdgeCase = dog => dogEdgeCases.includes(dog);

// Wiki functions

// Get page title
// Some snippets seem to start mid-sentence


// Catching instances where Wiki API serves weird snippets
const wikiEdgeCases =
    ['Affenpinscher', 'Akita', 'Belgian', 'Cairn',
    'Caucasian Shepherd Dog', 'Chihuahua', 'Keeshond',
    'Jack', 'Leonberg', 'Merrill',
    'Malinois', 'mixed', 'Old English Bulldog', 
    'Pyrenees', 'Siberian'];

export const isWikiEdgeCase = title => wikiEdgeCases.includes(title);

// Sanitise snippet and return first sentence
// const hasCaps = snippet => snippet[0] !== snippet[0].toLowerCase();
const scrubHTML = snippet => snippet.replace(/<\/?[a-z][a-z0-9]*[^<>]*>/ig, '');
const escQuotes = snippet => snippet.replace(/&quot;/ig, '"');
const firstSentence = snippet =>
    `${snippet.substring(0, snippet.indexOf('.'))}.`;
export const cleanSnippet = snippet =>
    pipe(scrubHTML, 
        escQuotes, 
        firstSentence)
        (snippet)
