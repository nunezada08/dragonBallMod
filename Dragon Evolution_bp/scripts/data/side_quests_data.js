const side_quests_data = [
  {
    id: "bring_fish_for_karin",
    type: "side",
    preDialogCount: 3,
    objectives: [
      {
        isRestartable: false,
        tasks: [
          {
            type: "collect_item",
            item: "dbe:giant_fish",
            deliverToNpc: "dbe:korin",
            count: 5
          }
        ]
      },
      {
        isRestartable: false,
        tasks: [
          {
            type: "interact_npc",
            entity: "dbe:korin",
            dialogCount: 3
          }
        ]
      }
    ],
    rewards: [
      {
        type: "item",
        item: "dbe:flying_nimbus"
      },
      {
        type: "zeni",
        amount: 5
      }
    ]
  },
  {
    id: "fetch_bulma_outfit",
    type: "side",
    preDialogCount: 3,
    objectives: [
      {
        isRestartable: false,
        tasks: [
          {
            type: "collect_item",
            item: "dbe:bunny_costume_ears",
            deliverToNpc: "dbe:master_roshi"
          }
        ]
      }
    ],
    rewards: [
      {
        type: "item",
        item: "dbe:power_pole"
      },
      {
        type: "zeni",
        amount: 15
      }
    ]
  },
  {
    id: "pirate_robot_treasure",
    type: "side",
    preDialogCount: 3,
    objectives: [
      {
        isRestartable: false,
        tasks: [
          {
            type: "enter_biome",
            biome: "minecraft:beach"
          }
        ]
      },
      {
        tasks: [
          {
            type: "defeat_enemy",
            entity: "dbe:pirate_robot",
            spawnOnStart: true
          }
        ]
      },
      {
        isRestartable: false,
        tasks: [
          {
            type: "dialog",
            dialogCount: 3
          }
        ]
      }
    ],
    rewards: [
      {
        type: "item",
        item: "dbe:pirate_robot_head"
      },
      {
        type: "item",
        item: "dbe:katana"
      },
      {
        type: "item",
        item: "dbe:nanochip",
        amount: 2
      },
      {
        type: "item",
        item: "dbe:evolitium_crystal",
        amount: 6
      },
      {
        type: "item",
        item: "minecraft:iron_ingot",
        amount: 8
      },
      {
        type: "z_points",
        amountSource: "based_on_enemies"
      },
      {
        type: "zeni",
        amountSource: "based_on_enemies"
      }
    ]
  },
  {
    id: "whis_ramen_delivery",
    type: "side",
    preDialogCount: 4,
    objectives: [
      {
        isRestartable: false,
        tasks: [
          {
            type: "collect_item",
            item: "dbe:ramen",
            deliverToNpc: "dbe:whis",
            count: 2
          }
        ]
      },
      {
        isRestartable: false,
        tasks: [
          {
            type: "interact_npc",
            entity: "dbe:whis",
            dialogCount: 3
          }
        ]
      }
    ],
    rewards: [
      {
        type: "z_points",
        amountSource: "based_on_enemies"
      }
    ]
  }
];
export {
  side_quests_data
};
