const skills_data = [
  {
    type: "common",
    id: "aura_boost",
    functionSlot: 6,
    isPassive: false,
    kiDrain: 1,
    price: 3,
    propertyId: "dbe:aura_boost",
    availableTrainers: [
      "dbe:cell_npc",
      "dbe:kami_sama"
    ],
    multipliers: {
      jump: 2,
      ki_consume: 2,
      running_speed: 2
    }
  },
  {
    type: "common",
    id: "burst_move",
    isPassive: false,
    kiDrain: 1,
    price: 5,
    availableTrainers: [
      "dbe:cell_npc",
      "dbe:goku",
      "dbe:piccolo"
    ]
  },
  {
    type: "common",
    id: "divine_ki",
    isPassive: true,
    showHudIcon: true
  },
  {
    type: "ki_attack",
    id: "final_flash",
    kiDrain: 26,
    price: 7,
    availableTrainers: [
      // "dbe:cell_npc",
      // "dbe:vegeta_npc"
    ],
    kiAttackProperties: {
      type: "beam",
      baseDamage: 7,
      baseScale: 4,
      chargeSpeed: 1.5,
      color0: "#fcf1b1",
      color1: "#d8b05b",
      explosionPower: 6,
      offset: [2, 1, 0],
      speed: 0.7,
      propertyIndex: 7,
      shootSound: "skill.final_flash_launch",
      startChargeSound: "skill.final_flash_gun"
    }
  },
  {
    type: "common",
    id: "friendly_fist",
    functionSlot: 8,
    isPassive: false,
    price: 1,
    showHudIcon: true,
    availableTrainers: [
      "dbe:kami_sama"
    ]
  },
  {
    type: "common",
    id: "fly",
    functionSlot: 3,
    isPassive: false,
    kiDrain: 1,
    price: 4,
    availableTrainers: [
      "dbe:cell_npc",
      "dbe:goku",
      "dbe:mr_popo"
    ],
    tiers: [
      {
        levelRange: [1, 10],
        upgradeCost: 1
      }
    ]
  },
  {
    type: "ki_attack",
    id: "galick_gun",
    kiDrain: 26,
    price: 7,
    availableTrainers: [
      "dbe:cell_npc",
      "dbe:vegeta_npc"
    ],
    kiAttackProperties: {
      type: "beam",
      baseDamage: 7,
      baseScale: 4,
      chargeSpeed: 1.5,
      color0: "#e7b1fc",
      color1: "#b55bd8",
      explosionPower: 6,
      offset: [2, 1, 0],
      speed: 0.7,
      propertyIndex: 6,
      shootSound: "skill.galick_gun_launch",
      startChargeSound: "skill.galick_gun"
    }
  },
  {
    type: "ki_attack",
    id: "genki_dama",
    kiDrain: 50,
    price: 8,
    availableTrainers: [
      "dbe:king_kai"
    ],
    kiAttackProperties: {
      type: "blast",
      baseDamage: 15,
      baseScale: 20,
      chargeSpeed: 0.5,
      color0: "#FFFFFF",
      color1: "#80ccff",
      explosionPower: 10,
      offset: [0, 4, 0],
      speed: 0.7,
      propertyIndex: 1
    }
  },
  {
    type: "common",
    id: "gigantification",
    functionSlot: 7,
    isPassive: false,
    kiDrain: 1,
    price: 6,
    availableTrainers: [
      "dbe:cell_npc",
      "dbe:piccolo"
    ],
    multipliers: {
      constitution: 1.5,
      dexterity: 0.5,
      jump: 10,
      ki_consume: 2,
      size: 2,
      strength: 1.5
    },
    requirements: {
      race: ["bio_android", "namekian"]
    }
  },
  {
    type: "common",
    id: "hakai",
    isPassive: true,
    price: 200,
    showHudIcon: true,
    availableTrainers: [
      "dbe:beerus"
    ],
    masteryOptions: {
      grantTrigger: "on_damage",
      hasDecay: true
    },
    requirements: {
      notSkills: ["ultra_instinct"]
    },
    tiers: [
      {
        levelRange: [1, 1],
        upgradeCost: 50,
        multipliers: {
          dodge: 0.5,
          strength: 1.2,
          willpower: 1.2
        }
      },
      {
        levelRange: [2, 2],
        multipliers: {
          dodge: 0.5,
          strength: 1.4,
          willpower: 1.4
        }
      }
    ]
  },
  {
    type: "common",
    id: "healing_power",
    isPassive: true,
    price: 6,
    availableTrainers: [
      "dbe:king_kai"
    ],
    tiers: []
  },
  {
    type: "common",
    id: "jump",
    isPassive: true,
    price: 2,
    availableTrainers: [
      "dbe:cell_npc",
      "dbe:kami_sama",
      "dbe:mr_popo"
    ],
    tiers: [
      {
        levelRange: [1, 10],
        upgradeCost: 1
      }
    ]
  },
  {
    type: "common",
    id: "kaioken",
    functionSlot: 0,
    isPassive: false,
    price: 8,
    propertyId: "dbe:kaioken",
    showHudIcon: true,
    availableTrainers: [
      "dbe:king_kai"
    ],
    tiers: [
      {
        levelRange: [1, 1],
        upgradeCost: 1
      },
      {
        levelRange: [2, 2],
        upgradeCost: 2
      },
      {
        levelRange: [3, 3],
        upgradeCost: 3
      },
      {
        levelRange: [4, 4],
        upgradeCost: 4
      },
      {
        levelRange: [5, 5]
      }
    ]
  },
  {
    type: "ki_attack",
    id: "kamehameha",
    kiDrain: 25,
    price: 7,
    availableTrainers: [
      "dbe:cell_npc",
      "dbe:master_roshi"
    ],
    kiAttackProperties: {
      type: "beam",
      baseDamage: 6,
      baseScale: 4,
      chargeSpeed: 1.5,
      color0: "#FFFFFF",
      color1: "#14C8F3",
      explosionPower: 6,
      offset: [2, 1, 0],
      speed: 0.7,
      propertyIndex: 2,
      shootSound: "skill.kamehameha_launch",
      startChargeSound: "skill.kamehameha"
    }
  },
  {
    type: "ki_attack",
    id: "ki_blast",
    canMoveWhileFiring: true,
    kiDrain: 5,
    price: 3,
    availableTrainers: [
      "dbe:cell_npc",
      "dbe:goku",
      "dbe:master_roshi",
      "dbe:piccolo"
    ],
    kiAttackProperties: {
      type: "blast",
      baseDamage: 1.5,
      breaksBlocks: false,
      chargeSpeed: 8,
      color0: "#FFFFFF",
      explosionPower: 5,
      ignoreAttackBar: true,
      offset: [1, 1.375, -0.375],
      propertyIndex: 3,
      shootSound: "common.ki_blast",
      speed: 1.5
    }
  },
  {
    type: "common",
    id: "ki_fist",
    functionSlot: 10,
    isPassive: false,
    kiDrain: 2,
    kiDrainTrigger: "on_hit",
    price: 6,
    availableTrainers: [
      "dbe:cell_npc",
      "dbe:goku"
    ],
    tiers: [
      {
        levelRange: [1, 10],
        upgradeCost: 2
      }
    ]
  },
  {
    type: "common",
    id: "ki_protect",
    functionSlot: 11,
    isPassive: false,
    kiDrain: 2,
    kiDrainTrigger: "on_damage",
    price: 6,
    availableTrainers: [
      "dbe:kami_sama"
    ],
    tiers: [
      {
        levelRange: [1, 10],
        upgradeCost: 2
      }
    ]
  },
  {
    type: "weapon",
    id: "ki_scythe",
    functionSlot: 5,
    baseDamage: 2,
    kiDrain: 2,
    price: 12,
    propertyId: "dbe:ki_scythe",
    availableTrainers: [
      "dbe:whis"
    ]
  },
  {
    type: "common",
    id: "ki_sense",
    isPassive: true,
    price: 5,
    availableTrainers: [
      "dbe:cell_npc",
      "dbe:mr_popo"
    ],
    tiers: [
      {
        levelRange: [1, 10],
        upgradeCost: 1
      }
    ]
  },
  {
    type: "ki_attack",
    id: "kienzan",
    kiDrain: 30,
    price: 6,
    availableTrainers: [
      "dbe:cell_npc",
      "dbe:krillin"
    ],
    kiAttackProperties: {
      type: "disc",
      baseDamage: 2,
      baseScale: 2,
      canCutTail: true,
      chargeSpeed: 1.5,
      color0: "#ffe6a0",
      color1: "#f7d12a",
      offset: [0, 2, -0.375],
      speed: 3,
      propertyIndex: 4
    }
  },
  {
    type: "common",
    id: "legendary",
    colorPriority: 0,
    isPassive: true,
    showHudIcon: true,
    spawnChance: 30,
    auraProperties: {
      kiBarColor: "green",
      color: "#8fff45"
    },
    multipliers: {
      dexterity: 1.5,
      size: 1.1,
      strength: 1.5
    },
    requirements: {
      race: "saiyan"
    }
  },
  {
    type: "ki_attack",
    id: "makankosappo",
    kiDrain: 25,
    price: 8,
    kiAttackProperties: {
      type: "beam",
      baseDamage: 5,
      baseScale: 1,
      color0: "#E8DF41",
      color1: "#D50FDE",
      hasSpiral: true,
      offset: [2.5, 1, -0.375],
      propertyIndex: 5,
      shootSound: "skill.makankosappo.launch",
      speed: 1,
      startChargeSound: "skill.makankosappo"
    }
  },
  {
    type: "common",
    id: "metamoran_dance",
    functionSlot: 9,
    isPassive: false,
    price: 15,
    showHudIcon: true,
    availableTrainers: [
      "dbe:piccolo"
    ]
  },
  {
    type: "common",
    id: "potential_unleashed",
    isPassive: true,
    price: 30,
    availableTrainers: [
      "dbe:king_kai"
    ],
    tiers: [
      {
        levelRange: [1, 10],
        upgradeCost: 2
      }
    ]
  },
  {
    type: "common",
    id: "rapid_movement",
    isPassive: false,
    price: 5,
    availableTrainers: [
      "dbe:cell_npc",
      "dbe:goku"
    ]
  },
  {
    type: "common",
    id: "ultra_instinct",
    colorPriority: 1,
    functionSlot: 2,
    isPassive: false,
    price: 200,
    showHudIcon: true,
    availableTrainers: [
      "dbe:whis"
    ],
    auraProperties: {
      kiBarColor: "white"
    },
    requirements: {
      notSkills: ["hakai"],
      skills: ["divine_ki"]
    },
    tiers: [
      {
        levelRange: [1, 1],
        upgradeCost: 50,
        colorOverrides: {
          eyes: "#DEE7EA"
        },
        multipliers: {
          dexterity: 1.5,
          dodge: 2,
          willpower: 1.2
        }
      },
      {
        levelRange: [2, 2],
        colorOverrides: {
          eyes: "#DEE7EA",
          hair: "#C8D2D8",
          tail: "#969BA7"
        },
        multipliers: {
          dexterity: 1.4,
          dodge: 4,
          willpower: 1.4
        }
      }
    ]
  }
];
export {
  skills_data
};
