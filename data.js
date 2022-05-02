// English Story
/*^*^*^*^*^*^*^*
data.js
Where all the scenes and options are stored at.
*^*^*^*^*^*^*^*/

const data = {
  "Tyler's Room": {
    description: "You wake up to the aroma of chicken and waffles drifting through the house, carried on a flying carpet, made of the wonderful scent of his mother’s specialty and your favorite breakfast, laid out magnificently on the table. You quickly get dressed and rush downstairs. Your mother was already eating her specialty chicken breakfast, You start eating your mother’s delicious and amazeballs breakfast.",
    options: [{location: "Tell Mother Dream", name: "Tell your mother a dream you had"}]
  },
  "Tell Mother Dream": {
    description: "Yesterday, late in the night, you had a strange dream about a dark sword, resting under a dead tree, under crinkled brown leaves. The sky is dark, and lightning strikes. You squeal in fear, and start rushing through the forest behind you, tripping over vines and branches. You run, faster and faster, until you’re covered in thorns, and scratches are enveloping your body. You run and you run, until you fall through the ground, you scream and try to scramble back out into the world, but it's too late. You fall and you fall and you fall, until you're floating in darkness, nothing to see, nothing to feel, nothing to smell. You tell ur mom the story, and she listens intently.",
    options: [{location: "Tyler's Room", name: "Back"}]
  },
  "Meadows": {
    description: "It's green. There is a rabbit.",
    options: [{location: "Forest", name: "Back"}, {location: "Take rabbit", name: "Take rabbit"}]
  },
  "Deeper Dark Thicket": {
    description: "It's very dark. Suddenly, a bear jumps out of nowhere.",
    options: [{location: "Die", name: "Die"}, {location: "Feed rabbit", name: "Feed rabbit to bear", item: "rabbit"}]
  },
  "Die": {
    description: "YOU DIED. Restart?",
    options: [{location: "Forest", name: "Restart"}]
  },
  "Feed rabbit": {
    description: "The bear eats the rabbit while you flee.",
    options: [{location: "Forest", name: "Forest"}]
  },
  "Take rabbit": {
    description: "You take the rabbit.",
    options: [{location: "Meadows", name: "Back"}],
    item: "rabbit"
  }
};
