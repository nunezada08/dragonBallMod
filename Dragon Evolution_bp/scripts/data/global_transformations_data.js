const global_transformations_data = [
  {
    id: "ultimate_form",
    kiDrain: 0,
    auraProperties: {
      sparks: true,
      color: "#FFFFFF"
    },
    colorOverrides: {
      eyes: "#000000"
    },
    multipliers: {
      dexterity: 3.1,
      strength: 3.1,
      willpower: 3.1
    },
    requirements: {
      skills: ["potential_unleashed"]
    }
  },
  {
    id: "beast",
    auraProperties: {
      sparks: true,
      color: "#FF1CF7"
    },
    colorOverrides: {
      eyes: "#E97777",
      hair: "#E6DDE9"
    },
    multipliers: {
      dexterity: 4,
      ki_consume: 6,
      strength: 4,
      willpower: 4
    },
    requirements: {
      skills: [
        {
          potential_unleashed: {
            max: 10,
            min: 10
          }
        }
      ]
    }
  },
  {
    id: "ultra_ego",
    auraProperties: {
      kiBarColor: "purple",
      sparks: true,
      color: "#FA19FA"
    },
    colorOverrides: {
      eyes: "#B45BAA",
      hair: "#8B2A7D"
    },
    multipliers: {
      dexterity: 3,
      ki_consume: 6,
      strength: 4.5,
      willpower: 4.5
    },
    requirements: {
      skills: ["hakai"]
    }
  }
];
export {
  global_transformations_data
};
