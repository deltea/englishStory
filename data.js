// English Story
/*^*^*^*^*^*^*^*
data.js
Where all the scenes and options are stored at.
*^*^*^*^*^*^*^*/

const data = {
  "Mountains": {
    description: "As you awake, you find yourself lying down, looking up at dark treetops, looming over you like a tall figure’s shadow. There are spots of light shining down upon you, glistening through the trees, highlighting the sparkly dew dripping off the ferns surrounding you. You stand up, and look through the trees. On one side of you, you can barely see green grass, of what looks to be a meadow. On the other side, you see a dark, imminent thicket of twisting black vines. You think a while, pondering on which seemed better to walk towards. After all, you had no idea how you got here, all you know is that you came flying through a dark portal, and came crashing down through the treetops.",
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
