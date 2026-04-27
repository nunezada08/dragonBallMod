const races_data = [
  {
    id: "earthling",
    regenRate: 1,
    colorIndexes: {
      aura: 0,
      eyes: 1
    },
    multipliers: {
      constitution: 1,
      dexterity: 1,
      strength: 1,
      spirit: 2,
      willpower: 2
    },
    transformations: [
      {
        id: "buffed",
        bodyType: "muscular",
        auraProperties: {
          color: "#6FD4FA"
        },
        multipliers: {
          dexterity: 1.3,
          ki_consume: 2,
          size: 1.05,
          strength: 1.3,
          willpower: 1.3
        },
        requirements: {
          zLevel: 20
        }
      },
      {
        id: "full_released",
        auraProperties: {
          color: "#6FD4FA"
        },
        multipliers: {
          dexterity: 1.8,
          ki_consume: 3,
          size: 1.1,
          strength: 1.8,
          willpower: 1.8
        },
        requirements: {
          zLevel: 30
        }
      },
      {
        id: "god",
        auraProperties: {
          type: "divine",
          soundIndex: 1,
          color: "#FA8200"
        },
        multipliers: {
          dexterity: 2.6,
          ki_consume: 3,
          strength: 2.6,
          willpower: 2.6
        },
        requirements: {
          skills: ["divine_ki"],
          zLevel: 55
        }
      },
      "ultimate_form",
      "beast",
      "ultra_ego"
    ]
  },
  {
    id: "saiyan",
    regenRate: 1,
    modifiers: ["saiyan_tail"],
    colorIndexes: {
      aura: 0,
      eyes: 2,
      hair: 1,
      tail: 3
    },
    multipliers: {
      constitution: 1,
      dexterity: 1,
      strength: 2.5,
      spirit: 1,
      willpower: 1
    },
    customizations: {
      hasGender: true,
      options: {
        beard: {
          type: "variant",
          activeGenders: ["male"],
          barberEditable: true,
          optionCount: 6,
          propertyIndex: 2
        },
        eyes: {
          type: "variant",
          optionCount: 1,
          propertyIndex: 3
        },
        eye_color: {
          type: "color",
          colorId: "eyes",
          palette: [
            "#191919",
            "#7E6856",
            "#3893EA",
            "#520A0A",
            "#78C355"
          ]
        },
        hair: {
          type: "variant",
          barberEditable: true,
          optionCount: 6,
          propertyIndex: 1
        },
        hair_color: {
          type: "color",
          barberEditable: true,
          colorId: "hair",
          palette: [
            "#191919",
            "#392821",
            "#F0DD9E",
            "#A865C3",
            "#2381C6",
            "#9D2C2C"
          ]
        },
        skin: {
          type: "variant",
          optionCount: 6,
          propertyIndex: 0
        },
        tail_color: {
          type: "color",
          colorId: "tail",
          palette: [
            "#7C4D2C"
          ]
        }
      }
    },
    transformations: [
      {
        id: "oozaru",
        isArmorVisible: false,
        kiDrain: 0,
        auraProperties: {
          color: "#6FD4FA"
        },
        multipliers: {
          dexterity: 1.3,
          dodge: 0,
          jump: 10,
          size: 2,
          strength: 1.3,
          willpower: 1.3
        },
        requirements: {
          modifiers: ["saiyan_tail"],
          timeOfDay: "night"
        },
        tags: [
          "oozaru"
        ]
      },
      {
        id: "ssj",
        multipliers: {
          dexterity: 1.8,
          ki_consume: 2,
          strength: 1.8,
          willpower: 1.8
        },
        auraProperties: {
          kiBarColor: "yellow",
          overridableByLegendary: true,
          color: "#F7E248"
        },
        colorOverrides: {
          eyes: "#6DC9C8",
          hair: "#F0DD9E"
        },
        requirements: {
          zLevel: 26
        }
      },
      {
        id: "assj",
        bodyType: "muscular",
        auraProperties: {
          kiBarColor: "yellow",
          overridableByLegendary: true,
          color: "#F7E248"
        },
        multipliers: {
          dexterity: 2.2,
          ki_consume: 4,
          size: 1.1,
          strength: 2.2,
          willpower: 2.2
        },
        colorOverrides: {
          eyes: "#6DC9C8",
          hair: "#F0DD9E"
        },
        requirements: {
          masteries: [
            {
              ssj: {
                min: 100,
                max: 100
              }
            }
          ]
        }
      },
      {
        id: "ssj2",
        auraProperties: {
          kiBarColor: "yellow",
          overridableByLegendary: true,
          sparks: true,
          color: "#F7E248"
        },
        multipliers: {
          dexterity: 2.7,
          ki_consume: 3,
          strength: 2.7,
          willpower: 2.7
        },
        colorOverrides: {
          eyes: "#6DC9C8",
          hair: "#F0DD9E"
        },
        requirements: {
          zLevel: 36
        }
      },
      {
        id: "ssj3",
        auraProperties: {
          kiBarColor: "yellow",
          overridableByLegendary: true,
          sparks: true,
          color: "#F7E248"
        },
        multipliers: {
          dexterity: 3,
          ki_consume: 6,
          size: 1.1,
          strength: 3,
          willpower: 3
        },
        colorOverrides: {
          eyes: "#6DC9C8",
          hair: "#E4C88A"
        },
        requirements: {
          zLevel: 46
        }
      },
      {
        id: "lssj",
        bodyType: "muscular",
        auraProperties: {
          overridableByLegendary: true
        },
        colorOverrides: {
          eyes: "#FFFFFF",
          hair: "#98D865"
        },
        multipliers: {
          dexterity: 3.25,
          ki_consume: 6,
          size: 1.1,
          strength: 3.25
        },
        requirements: {
          skills: ["legendary"],
          zLevel: 26
        }
      },
      "ultimate_form",
      {
        id: "golden_oozaru",
        isArmorVisible: false,
        kiDrain: 0,
        auraProperties: {
          kiBarColor: "yellow",
          overridableByLegendary: true,
          color: "#F7E248"
        },
        multipliers: {
          dexterity: 2.1,
          dodge: 0,
          jump: 10,
          size: 2,
          strength: 2.1,
          willpower: 2.1
        },
        requirements: {
          modifiers: ["saiyan_tail"],
          timeOfDay: "night",
          masteries: [
            {
              ssj: {
                min: 100,
                max: 100
              }
            },
            {
              oozaru: {
                min: 100,
                max: 100
              }
            }
          ]
        },
        tags: [
          "oozaru"
        ]
      },
      {
        id: "ssj4",
        auraProperties: {
          kiBarColor: "yellow",
          sparks: true,
          color: "#F7E248"
        },
        colorOverrides: {
          eyes: "#D58900",
          tail: "#B0051D"
        },
        multipliers: {
          dexterity: 3.2,
          ki_consume: 4,
          size: 1.1,
          strength: 3.2,
          willpower: 3.2
        },
        requirements: {
          modifiers: ["saiyan_tail"],
          zLevel: 50
        }
      },
      {
        id: "ssjg",
        bodyType: "slim",
        auraProperties: {
          type: "divine",
          soundIndex: 1,
          color: "#FA8200"
        },
        colorOverrides: {
          eyes: "#9D1210",
          hair: "#CB303D"
        },
        multipliers: {
          dexterity: 3.4,
          ki_consume: 3,
          strength: 3.4,
          willpower: 3.4
        },
        requirements: {
          skills: ["divine_ki"],
          zLevel: 55
        }
      },
      {
        id: "ssjb",
        auraProperties: {
          soundIndex: 1,
          color: "#0084FA"
        },
        colorOverrides: {
          eyes: "#3A99D2",
          hair: "#5DBFFF"
        },
        multipliers: {
          dexterity: 3.6,
          ki_consume: 5,
          strength: 3.6,
          willpower: 3.6
        },
        requirements: {
          alignment: ["neutral", "good"],
          skills: ["divine_ki"],
          zLevel: 65
        }
      },
      {
        id: "ssjr",
        auraProperties: {
          kiBarColor: "pink",
          soundIndex: 1,
          color: "#F500AA"
        },
        colorOverrides: {
          eyes: "#FCBDD7",
          hair: "#F396B3"
        },
        multipliers: {
          dexterity: 3.6,
          ki_consume: 5,
          strength: 3.6,
          willpower: 3.6
        },
        requirements: {
          alignment: "evil",
          skills: ["divine_ki"],
          zLevel: 65
        }
      },
      {
        id: "ssjbe",
        auraProperties: {
          soundIndex: 1,
          sparks: true,
          color: "#0084FA"
        },
        colorOverrides: {
          eyes: "#2A6BC9",
          hair: "#3C92E0"
        },
        multipliers: {
          dexterity: 3.8,
          ki_consume: 6,
          strength: 3.8,
          willpower: 3.8
        },
        requirements: {
          alignment: ["neutral", "good"],
          skills: ["divine_ki"],
          zLevel: 75
        }
      },
      {
        id: "ssjre",
        auraProperties: {
          kiBarColor: "pink",
          soundIndex: 1,
          sparks: true,
          color: {
            red: 245,
            green: 0,
            blue: 170
          }
        },
        colorOverrides: {
          eyes: "#FCBDD7",
          hair: "#D76281"
        },
        multipliers: {
          dexterity: 3.8,
          ki_consume: 6,
          strength: 3.8,
          willpower: 3.8
        },
        requirements: {
          alignment: "evil",
          skills: ["divine_ki"],
          zLevel: 75
        }
      },
      "beast",
      "ultra_ego"
    ]
  },
  {
    id: "namekian",
    regenRate: 1.8,
    colorIndexes: {
      aura: 0,
      eyes: 1
    },
    multipliers: {
      constitution: 2,
      dexterity: 1,
      size: 1.3,
      strength: 1,
      spirit: 1,
      willpower: 1
    },
    customizations: {
      options: {
        skin: {
          type: "variant",
          optionCount: 4,
          propertyIndex: 0
        }
      }
    },
    defaultSkills: [
      "healing_power"
    ],
    transformations: [
      {
        id: "full_released",
        auraProperties: {
          color: "#6FD4FA"
        },
        colorOverrides: {
          eyes: "#000000"
        },
        multipliers: {
          dexterity: 1.8,
          ki_consume: 3,
          size: 1.1,
          strength: 1.8,
          willpower: 1.8
        },
        requirements: {
          zLevel: 20
        }
      },
      {
        id: "potential_unleashed",
        auraProperties: {
          color: "#FA8200"
        },
        colorOverrides: {
          eyes: "#000000"
        },
        multipliers: {
          dexterity: 2.75,
          ki_consume: 3,
          strength: 2.75,
          willpower: 2.75
        },
        requirements: {
          skills: ["potential_unleashed"],
          zLevel: 30
        }
      },
      "ultimate_form",
      {
        id: "orange_form",
        showHudIcon: true,
        auraProperties: {
          kiBarColor: "yellow",
          soundIndex: 1,
          color: "#FA8200"
        },
        colorOverrides: {
          eyes: "#000000"
        },
        multipliers: {
          dexterity: 3.7,
          ki_consume: 6,
          size: 1.2,
          strength: 3.7,
          willpower: 3.7
        },
        requirements: {
          skills: ["potential_unleashed"],
          zLevel: 55
        }
      },
      "beast",
      "ultra_ego"
    ]
  },
  {
    id: "frost_demon",
    regenRate: 1.2,
    colorIndexes: {
      aura: 0,
      eyes: 1
    },
    multipliers: {
      constitution: 1,
      dexterity: 2,
      size: 0.95,
      strength: 1,
      spirit: 1,
      willpower: 1.7
    },
    customizations: {
      options: {
        skin: {
          type: "variant",
          optionCount: 5,
          propertyIndex: 0
        }
      }
    },
    transformations: [
      {
        id: "second_form",
        bodyType: "muscular",
        auraProperties: {
          color: "#FF1CF7"
        },
        colorOverrides: {
          eyes: "#000000"
        },
        multipliers: {
          dexterity: 1.2,
          ki_consume: 2,
          size: 1.3,
          strength: 1.2,
          willpower: 1.2
        },
        requirements: {
          zLevel: 15
        }
      },
      {
        id: "third_form",
        bodyType: "muscular",
        auraProperties: {
          color: "#FF1CF7"
        },
        colorOverrides: {
          eyes: "#000000"
        },
        multipliers: {
          dexterity: 1.5,
          ki_consume: 3,
          size: 1.2,
          strength: 1.5,
          willpower: 1.5
        },
        requirements: {
          zLevel: 20
        }
      },
      {
        id: "fourth_form",
        auraProperties: {
          color: "#FF1CF7"
        },
        colorOverrides: {
          eyes: "#000000"
        },
        multipliers: {
          dexterity: 1.8,
          ki_consume: 2,
          strength: 1.8,
          willpower: 1.8
        },
        requirements: {
          zLevel: 25

        }
      },
      {
        id: "full_power",
        bodyType: "muscular",
        auraProperties: {
          color: "#FF1CF7"
        },
        colorOverrides: {
          eyes: "#000000"
        },
        multipliers: {
          dexterity: 2.2,
          ki_consume: 3,
          size: 1.15,
          strength: 2.2,
          willpower: 2.2
        },
        requirements: {
          zLevel: 30
        }
      },
      {
        id: "fifth_form",
        bodyType: "muscular",
        auraProperties: {
          color: "#FF1CF7"
        },
        colorOverrides: {
          eyes: "#000000"
        },
        multipliers: {
          dexterity: 3,
          ki_consume: 3,
          size: 1.2,
          strength: 3,
          willpower: 3
        },
        requirements: {
          zLevel: 35
        }
      },
      "ultimate_form",
      {
        id: "golden_form",
        auraProperties: {
          kiBarColor: "yellow",
          color: "#F7E248"
        },
        colorOverrides: {
          eyes: "#000000"
        },
        multipliers: {
          dexterity: 3.6,
          ki_consume: 4,
          strength: 3.6,
          willpower: 3.6
        },
        requirements: {
          zLevel: 55
        }
      },
      {
        id: "black_form",
        auraProperties: {
          color: {
            red: 187,
            green: 41,
            blue: 255
          }
        },
        colorOverrides: {
          eyes: "#000000"
        },
        multipliers: {
          dexterity: 4,
          ki_consume: 5,
          strength: 4,
          willpower: 4
        },
        requirements: {
          zLevel: 70
        }
      },
      "beast",
      "ultra_ego"
    ]
  },
  {
    id: "majin",
    regenRate: 2.5,
    colorIndexes: {
      aura: 0,
      eyes: 2
    },
    multipliers: {
      constitution: 2,
      dexterity: 1.5,
      size: 0.95,
      strength: 1,
      spirit: 1,
      willpower: 1
    },
    customizations: {
      hasGender: true,
      options: {
        eyes: {
          type: "color",
          colorId: "eyes",
          palette: [
            "#C7001C"
          ]
        },
        skin: {
          type: "variant",
          optionCount: 9,
          propertyIndex: 0
        }
      }
    },
    defaultSkills: [
      "healing_power"
    ],
    transformations: [
      {
        id: "pure_majin",
        auraProperties: {
          color: "#FF1CF7"
        },
        multipliers: {
          dexterity: 2.7,
          ki_consume: 3,
          regen_rate: 1.1,
          strength: 2.7,
          willpower: 2.7
        },
        requirements: {
          zLevel: 26
        }
      },
      {
        id: "super_majin",
        auraProperties: {
          color: "#FF1CF7"
        },
        multipliers: {
          dexterity: 3,
          ki_consume: 5,
          regen_rate: 1.2,
          size: 1.1,
          strength: 3,
          willpower: 3
        },
        requirements: {
          zLevel: 36
        }
      },
      "ultimate_form",
      {
        id: "ultra_majin",
        auraProperties: {
          color: "#FF1CF7"
        },
        multipliers: {
          dexterity: 3.2,
          ki_consume: 2,
          regen_rate: 1.4,
          strength: 3.2,
          willpower: 3.2
        },
        requirements: {
          zLevel: 50
        }
      },
      "beast",
      "ultra_ego"
    ]
  },
  {
    id: "bio_android",
    regenRate: 1.5,
    colorIndexes: {
      aura: 0,
      eyes: 1
    },
    multipliers: {
      constitution: 1.6,
      dexterity: 1,
      size: 1.3,
      strength: 1.7,
      spirit: 1,
      willpower: 1
    },
    customizations: {
      options: {
        skin: {
          type: "variant",
          optionCount: 6,
          propertyIndex: 0
        }
      }
    },
    defaultSkills: [
      "healing_power"
    ],
    transformations: [
      {
        id: "semi_perfect",
        auraProperties: {
          color: "#F7E248"
        },
        colorOverrides: {
          eyes: "#000000"
        },
        multipliers: {
          dexterity: 1.4,
          ki_consume: 2,
          size: 1.2,
          strength: 1.4,
          willpower: 1.4
        },
        requirements: {
          zLevel: 15
        }
      },
      {
        id: "perfect",
        auraProperties: {
          kiBarColor: "yellow",
          sparks: true,
          color: "#F7E248"
        },
        colorOverrides: {
          eyes: "#000000"
        },
        multipliers: {
          dexterity: 1.8,
          ki_consume: 2,
          size: 1.1,
          strength: 1.8,
          willpower: 1.8
        },
        requirements: {
          zLevel: 25
        }
      },
      {
        id: "full_power",
        bodyType: "muscular",
        auraProperties: {
          kiBarColor: "yellow",
          color: "#F7E248"
        },
        colorOverrides: {
          eyes: "#000000"
        },
        multipliers: {
          dexterity: 2.2,
          ki_consume: 3,
          size: 1.1,
          strength: 2.2,
          willpower: 2.2
        },
        requirements: {
          zLevel: 30
        }
      },
      {
        id: "super_perfect",
        auraProperties: {
          kiBarColor: "yellow",
          sparks: true,
          color: "#F7E248"
        },
        colorOverrides: {
          eyes: "#000000"
        },
        multipliers: {
          dexterity: 2.7,
          ki_consume: 2,
          size: 1.1,
          strength: 2.7,
          willpower: 2.7
        },
        requirements: {
          zLevel: 45
        }
      },
      "ultimate_form",
      "beast",
      "ultra_ego"
    ]
  },
  {
    id: "glind",
    hiddenFromSelection: true,
    regenRate: 1,
    colorIndexes: {
      aura: 0,
      eyes: 2,
      hair: 1
    },
    multipliers: {
      constitution: 1,
      dexterity: 1,
      size: 0.8,
      strength: 1,
      spirit: 2.5,
      willpower: 2.5
    },
    customizations: {
      hasGender: true,
      options: {
        hair: {
          type: "variant",
          barberEditable: true,
          optionCount: 2,
          propertyIndex: 1
        },
        hair_color: {
          type: "color",
          barberEditable: true,
          colorId: "hair",
          palette: [
            "#EAE4EC",
            "#9D2C2C"
          ]
        },
        skin: {
          type: "variant",
          optionCount: 4,
          propertyIndex: 0
        }
      }
    },
    transformations: []
  }
];
export {
  races_data
};
