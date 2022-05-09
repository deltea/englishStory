// English Story
/*^*^*^*^*^*^*^*
data.js
Where all the scenes and options are stored at.
*^*^*^*^*^*^*^*/

const data = {
  "Tyler's Room": {
    description: "You wake up to the aroma of chicken and waffles drifting through the house, carried on a flying carpet, made of the wonderful scent of your mother’s specialty and your favorite breakfast, laid out magnificently on the table. You quickly get dressed and rush downstairs. Your mother was already eating her specialty chicken breakfast, You start eating your mother’s delicious and amazeballs breakfast.",
    options: [{location: "Tell Mother Dream", name: "Tell your mother a dream you had"}]
  },
  "Tell Mother Dream": {
    description: "Yesterday, late in the night, you had a strange dream about a dark sword, resting under a dead tree, under crinkled brown leaves. The sky was dark, and lightning struck. You squealed in fear, and started rushing through the forest behind you, tripping over vines and branches. You ran, faster and faster, until you were covered in thorns, and scratches were enveloping your body. You ran and ran, until you fell through the ground, you screamed and tried to scramble back out into the world, but it was too late. You fall and you fall and you fall, until you're floating in darkness, nothing to see, nothing to feel, nothing to smell.",
    options: [{location: "Tyler's Room Back", name: "Go back to your room"}]
  },
  "Tyler's Room Back": {
    description: "As you finish eating, you walk upstairs, and flop onto your bed. Your room is black, and years ago, your parents had put glow-in-the-dark stars on your ceiling, which now stared down at you, as if beckoning to you with glowing eyes. Lying down, you look up at the ceiling, and close your eyes. Ever since dad died, no one has given you a buh mug at night time, and drank hot choco with you. As you are thinking, you hear a loud shudder in your room, as if a huge door was opened before you. Opening your eyes, you see a growing, churning hole on your ceiling. You stare up at it, wondering, but not frightened.",
    options: [{location: "Go Into Portal", name: "Go into the portal"}, {location: "Ignore Portal", name: "Ignore the portal"}]
  },
  "Ignore Portal": {
    description: "You decide to just leave the portal alone and a growing cloud of lightning abruptly devours your entire body and you get electrocuted.",
    options: [{location: "Die", name: "Die"}]
  },
  "Go Into Portal": {
    description: "You start feeling something strange, and you slowly begin to float towards the strange hole. Faster and faster it pulls you, and suddenly you find yourself swirling into it, grasping for what you can, but there's nothing there. Tumbling and tumbling, you look back, as your room becomes smaller and smaller, until it's just a dot in the distance.",
    options: [{location: "Awakening", name: "Wake up"}]
  },
  "Awakening": {
    description: "As you wake, you find yourself lying down, looking up at dark treetops, looming over you like a tall figure’s shadow. There are spots of light shining down upon you, glistening through the trees, highlighting the sparkly dew dripping off the ferns surrounding you. You stand up and look through the trees. On one side of you, you can barely see green grass, of what looks to be a meadow, with a small hut on the far side of the meadow to the left. On the other side, you see a dark, imminent thicket of twisting black vines. You think a while, pondering on which seemed better to walk towards. After all, you had no idea how you got here, all you know is that you came flying through a dark portal, and came crashing down through the treetops.",
    options: [{location: "Go to Meadow", name: "Go towards the meadow"}]
  },
  "Go to Meadow": {
    description: "You scramble your way through the brush, and see a rotted sign, hanging with a single nail off a tree. “Fongarn forest.” it read. Moving on, you see a scrawny tree, with dead leaves collecting under it.",
    options: [{location: "Get Rust Sword", name: "Keep going"}]
  },
  "Get Rust Sword": {
    description: "As you walk through Fongarn, crunching leaves under your foot, dried from the past summer, you trip one something hard, and crash to the ground. You pull yourself up, dead leaves littered all over your body. After you brush yourself off, you bend down to look at the thing near your feet. You see a rusted piece of metal, lying under the leaves. “A rabbit trap?” You wonder, brushing off the leaves covering it “No, this can't be a rabbit trap, there's nothing attached to it, and no hole beneath.” When it's fully uncovered, you pull it up from the ground, and hold it up to the thin streams of light pouring through the treetops. “A sword. A Katana.” You say, grabbing it by the hilt. As you turn it around, you feel an intense pain in your index finger. You look down at your hand, and notice a thin trickle of blood running down your hand. “It's still sharp.” You exclaim in disbelief. “Even after all these years sitting rusted on the ground in the Fongarn forest. It’s still sharp.",
    options: [{location: "Do Nothing", name: "Do nothing"}, {location: "Pick Sword Up", name: "Pick Sword Up"}]
  },
  "Do Nothing": {
    description: "The tree suddenly falls down and squishes you into a pancake.",
    options: [{location: "Die", name: "Die"}]
  },
  "Pick Sword Up": {
    description: "You pick up a flower on the ground and the flower goes into a frenzy and bites and scratches you.",
    options: [{location: "Die", name: "Die"}]
  },
  "Go to Ya": {
    description: "You scramble your way through the brush, and see a rotted sign, hanging with a single nail off a tree. “Fongarn forest.” it read. Moving on, you see a scrawny tree, with dead leaves collecting under it. You see a rusty sword under a tree.",
    options: [{location: "Get Rusty Sword", name: "Go get it"}]
  },
};
