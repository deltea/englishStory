// English Story
/*^*^*^*^*^*^*^*
data.js
Where all the scenes and options are stored at.
*^*^*^*^*^*^*^*/

const data = {
  "Mountains": {
    description: "You started the story! You are on a high mountain range. Do you want to go to the forest, the house, or the meadows?",
    options: ["Forest", "House", "Meadows"]
  },
  "Forest": {
    description: "Spooky forest. End of sentence.",
    options: ["Mountains", "Collect pile of leaves"]
  },
  "House": {
    description: "You enter the house. It is eerily quiet. There is some food on the table.",
    options: ["Mountains", "Collect food"]
  },
  "Meadows": {
    description: "It's just a plain-old meadow.",
    options: ["Mountains"]
  },
  "Collect food": {
    description: "You collect the food. It's a rotten apple. I don't think you want to eat that.",
    options: ["House"],
    item: "Rotten apple"
  },
  "Collect pile of leaves": {
    description: "You collect the leaves. They are wrinkly. Duh",
    options: ["Forest"],
    item: "Pile of leaves"
  }
};
