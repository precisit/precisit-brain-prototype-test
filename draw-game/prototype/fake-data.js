/*
  One fake game, shared by every prototype screen so names, colours, scores and words agree.
  Include with <script src="fake-data.js"></script>; it defines window.PP.
  The story, from Milla's phone (Milla is "you" and the host):

    lobby      Milla creates room HJ4K7Q; seven friends join.
    turn 3     Milla draws "hedgehog" (picked from hedgehog / otter / pancake).
    turn 4     Jonas draws "lighthouse"; Milla guesses it.
    turn 5     Milla's phone sleeps while Farah draws "kettle"; she comes back mid-turn.
    end        After turn 8, Farah wins; Milla is second.
*/
window.PP = {
  room: {
    code: "HJ4K7Q",
    link: "penpanic.com/r/HJ4K7Q",
    wordLanguage: "English",            // or "Svenska"
    categories: ["Animals", "Food & Drink", "Around the Home", "Travel & Places"],
    allCategories: ["Animals", "Food & Drink", "Around the Home", "Sports & Hobbies",
                    "Nature & Weather", "Jobs", "Travel & Places", "Actions"],
    difficulty: "Medium",               // Easy | Medium | Hard
    drawSeconds: 80,
    turns: 8,
    customWords: "",                    // empty: built-in packs only
    maxPlayers: 30
  },

  you: "Milla",

  // Seat order. colour is a tokens.css variable name.
  players: [
    { name: "Milla",  colour: "--p1", host: true },
    { name: "Jonas",  colour: "--p2" },
    { name: "Farah",  colour: "--p3" },
    { name: "Olle",   colour: "--p4" },
    { name: "Astrid", colour: "--p5" },
    { name: "Elif",   colour: "--p6" },
    { name: "Oskar",  colour: "--p7" },
    { name: "Anna",   colour: "--p8" }
  ],

  // Totals before each moment, so every screen shows the same numbers.
  scores: {
    beforeTurn3: { Farah: 420, Jonas: 380, Olle: 310, Milla: 290, Astrid: 260, Anna: 240, Elif: 180, Oskar: 120 },
    // Turn 3: Milla drew. Guessers in order; Elif and Oskar missed.
    // Drawer earns the average over all seven guessers: 600 / 7 = 86.
    turn3:       { Olle: 180, Farah: 150, Anna: 120, Jonas: 90, Astrid: 60, Elif: 0, Oskar: 0, Milla: 86 },
    afterTurn3:  { Farah: 570, Jonas: 470, Olle: 490, Milla: 376, Astrid: 320, Anna: 360, Elif: 180, Oskar: 120 },
    // Turn 4: Jonas drew. Milla guessed second.
    turn4:       { Anna: 170, Milla: 150, Farah: 130, Olle: 100, Elif: 80, Astrid: 0, Oskar: 0, Jonas: 90 },
    afterTurn4:  { Farah: 700, Olle: 590, Jonas: 560, Milla: 526, Anna: 530, Astrid: 320, Elif: 260, Oskar: 120 },
    final:       { Farah: 1240, Milla: 1180, Olle: 1105, Jonas: 990, Anna: 930, Astrid: 860, Elif: 610, Oskar: 540 }
  },

  turn3: {
    number: 3, drawer: "Milla", word: "hedgehog", category: "Animals",
    choices: ["hedgehog", "otter", "pancake"],
    hint: { index: 2, letter: "d" },   // third letter shown to guessers
    secondsLeft: 34,
    feed: [
      { who: "Jonas",  text: "porcupine" },
      { who: "Farah",  text: "cactus with legs" },
      { who: "Olle",   guessed: true, points: 180 },
      { who: "Astrid", text: "pineapple??" },
      { who: "Farah",  guessed: true, points: 150 },
      { who: "Olle",   react: "😂" },
      { who: "Elif",   text: "hairbrush" }
    ]
  },

  turn4: {
    number: 4, drawer: "Jonas", word: "lighthouse", category: "Travel & Places",
    hint: { index: 0, letter: "l" },
    secondsLeft: 41,
    feed: [
      { who: "Elif",  text: "candle" },
      { who: "Oskar", text: "rocket" },
      { who: "Anna",  guessed: true, points: 170 },
      { who: "Milla", text: "tower" },            // Milla's wrong guess, before she gets it
      { who: "Anna",  react: "👏" }
    ]
  },

  turn5: {
    number: 5, drawer: "Farah", word: "kettle", category: "Around the Home",
    secondsLeft: 41, awaySeconds: 52,
    whileAway: ["Olle guessed it", "Anna guessed it"]
  },

  reactions: ["😂", "👏", "😮", "❤️"]
};
