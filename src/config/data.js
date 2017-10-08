let data = {
    mode_to_chromatic: {
        "1": 0  , "1-": 11 , "1+": 1  ,
        "2": 2  , "2-": 1  , "2+": 3  ,
        "3": 4  , "3-": 3  , "3+": 5  ,
        "4": 5  , "4-": 4  , "4+": 6  ,
        "5": 7  , "5-": 6  , "5+": 8  ,
        "6": 9  , "6-": 8  , "6+": 10 ,
        "7": 11 , "7-": 10 , "7+": 12 ,
        "8": 12 , "8-": 11 , "8+": 13
    },
    cool_notes: {
        "A":["flat", "sharp"],
        "B":["flat"],
        "C":["sharp"],
        "D":["sharp", "flat"],
        "E":["flat"],
        "F":["sharp"],
        "G":["sharp", "flat"],
    },
    sharp_based_chromatic: ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B",  "C"],
    flat_based_chromatic:  ["C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B",  "C"],
    modes: [
        {
            name: "Ionian",
            notes: ["1", "2",  "3",  "4",  "5",  "6",  "7"],
            blurb: "Happy, carefree"
        },
        {
            name: "Dorian",
            notes: ["1", "2",  "3-", "4",  "5",  "6",  "7-"],
            blurb: "Jazzy, grim"
        },
        {
            name: "Phrygian",
            notes: ["1", "2-", "3-", "4",  "5",  "6-", "7-"],
            blurb: "Exotic, mysterious"
        },
        {
            name: "Lydian",
            notes: ["1", "2",  "3",  "4+", "5",  "6",  "7"],
            blurb: "Ethereal, dreamy"
        },
        {
            name: "Mixolydian",
            notes: ["1", "2",  "3",  "4",  "5",  "6",  "7-"],
            blurb: "Bluesy, rock and roll"
        },
        {
            name: "Aeolian",
            notes: ["1", "2",  "3-", "4",  "5",  "6-", "7-"],
            blurb: "Sentimental, tragic"
        },
        {
            name: "Locrian",
            notes: ["1", "2-", "3-", "4",  "5-", "6-", "7-"],
            blurb: "Dark, unstable"
        }
    ]
}

export default data;
