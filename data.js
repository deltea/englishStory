// English Story
/*^*^*^*^*^*^*^*
data.js
Where all the scenes and options are stored at.
*^*^*^*^*^*^*^*/

const data = {
  "Mountains": {
    description: "As you awake, you find yourself lying down, looking up at dark treetops, looming over you like a tall figure’s shadow. There are spots of light shining down upon you, glistening through the trees, highlighting the sparkly dew dripping off the ferns surrounding you. You stand up, and look through the trees. On one side of you, you can barely see green grass, of what looks to be a meadow. On the other side, you see a dark, imminent thicket of twisting black vines. You think a while, pondering on which seemed better to walk towards. After all, you had no idea how you got here, all you know is that you came flying through a dark portal, and came crashing down through the treetops.",
    options: [{location: "Dark Thicket"}, {location: "Meadows"}]
  },
  "Dark Thicket": {
    description: "It's dark.",
    options: [{location: "Mountains"}]
  },
  "Meadows": {
    description: "It's green.",
    options: [{location: "Mountains"}]
  }
};
