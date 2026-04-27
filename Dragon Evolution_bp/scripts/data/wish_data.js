const wish_data = [
  {
    type: "change_race",
    name: "earthling",
    availableIn: [
      "dbe:porunga"
    ],
    requirements: {
      notRaces: ["earthling"]
    }
  },
  {
    type: "change_race",
    name: "bio_android",
    availableIn: [
      "dbe:porunga"
    ],
    requirements: {
      notRaces: ["bio_android"]
    }
  },
  {
    type: "change_race",
    name: "frost_demon",
    availableIn: [
      "dbe:porunga"
    ],
    requirements: {
      notRaces: ["frost_demon"]
    }
  },
  {
    type: "change_race",
    name: "saiyan",
    availableIn: [
      "dbe:porunga"
    ],
    requirements: {
      notRaces: ["saiyan"]
    }
  },
  {
    type: "change_race",
    name: "namekian",
    availableIn: [
      "dbe:porunga"
    ],
    requirements: {
      notRaces: ["namekian"]
    }
  },
  {
    type: "change_race",
    name: "majin",
    availableIn: [
      "dbe:porunga"
    ],
    requirements: {
      notRaces: ["majin"]
    }
  },
  {
    name: "dbe:brave_sword",
    type: "item",
    availableIn: [
      "dbe:shenron",
      "dbe:porunga"
    ]
  },
  {
    name: "dbe:cooked_dinosaur_meat",
    type: "item",
    amount: 256,
    availableIn: [
      "dbe:shenron",
      "dbe:porunga"
    ]
  },
  {
    name: "dbe:cooked_giant_fish",
    type: "item",
    amount: 256,
    availableIn: [
      "dbe:shenron",
      "dbe:porunga"
    ]
  },
  {
    name: "dbe:evolitium_crystal",
    type: "item",
    amount: 64,
    availableIn: [
      "dbe:shenron",
      "dbe:porunga"
    ]
  },
  {
    name: "dbe:katchin_shard",
    type: "item",
    amount: 2,
    availableIn: [
      "dbe:shenron",
      "dbe:porunga"
    ]
  },
  {
    name: "dbe:potara_earrings",
    type: "item",
    availableIn: [
      "dbe:shenron",
      "dbe:porunga"
    ]
  },
  {
    name: "dbe:power_fruit",
    type: "item",
    availableIn: [
      "dbe:shenron",
      "dbe:porunga"
    ]
  },
  {
    name: "dbe:senzu_bean",
    type: "item",
    amount: 5,
    availableIn: [
      "dbe:shenron",
      "dbe:porunga"
    ]
  },
  {
    name: "minecraft:amethyst_shard",
    type: "item",
    amount: 16,
    availableIn: [
      "dbe:shenron",
      "dbe:porunga"
    ]
  },
  {
    name: "minecraft:diamond",
    type: "item",
    amount: 64,
    availableIn: [
      "dbe:shenron",
      "dbe:porunga"
    ]
  },
  {
    name: "divine_ki",
    type: "skill",
    availableIn: [
      "dbe:shenron",
      "dbe:porunga"
    ],
    requirements: {
      notSkills: ["divine_ki"]
    }
  },
  {
    name: "potential_unleashed",
    type: "skill",
    availableIn: [
      "dbe:shenron",
      "dbe:porunga"
    ],
    requirements: {
      notSkills: ["potential_unleashed"],
      race: "namekian"
    }
  },
  {
    name: "grow_tail",
    type: "tail",
    availableIn: [
      "dbe:shenron",
      "dbe:porunga"
    ],
    requirements: {
      race: "saiyan"
    }
  }
];
export {
  wish_data
};
