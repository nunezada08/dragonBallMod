const challenge_quests_data = [
  {
    id: "piccolo_trial",
    type: "challenge",
    objectives: [
      {
        duration: 3e4,
        tasks: [
          {
            type: "use_training_weight",
            item: "dbe:piccolo_cape"
          },
          {
            type: "defeat_enemy",
            entity: "dbe:piccolo_enemy",
            spawnOnStart: true,
            entityDefinitions: {
              friendlyDamage: true,
              attributes: {
                total: 60,
                focus: {
                  constitution: 1,
                  dexterity: 2,
                  spirit: 1,
                  strength: 2,
                  willpower: 1.5
                }
              },
              availableTransformations: [
                "base",
                "full_released"
              ]
            }
          }
        ]
      }
    ],
    rewards: [
      {
        type: "skill",
        skill: "makankosappo"
      },
      {
        type: "z_points",
        amountSource: "based_on_enemies"
      }
    ]
  },
  {
    id: "saibaman_challenge",
    type: "challenge",
    preDialogCount: 3,
    objectives: [
      {
        duration: 6e4,
        tasks: [
          {
            type: "defeat_enemy",
            entity: "dbe:saibaman",
            count: 2,
            spawnOnStart: true
          }
        ]
      },
      {
        duration: 6e4,
        tasks: [
          {
            type: "defeat_enemy",
            entity: "dbe:saibaman",
            count: 4,
            spawnOnStart: true
          }
        ]
      },
      {
        duration: 6e4,
        tasks: [
          {
            type: "defeat_enemy",
            entity: "dbe:saibaman",
            count: 6,
            spawnOnStart: true
          }
        ]
      },
      {
        duration: 6e4,
        tasks: [
          {
            type: "defeat_enemy",
            entity: "dbe:saibaman",
            count: 8,
            spawnOnStart: true
          }
        ]
      },
      {
        duration: 6e4,
        tasks: [
          {
            type: "defeat_enemy",
            entity: "dbe:saibaman",
            count: 10,
            spawnOnStart: true
          }
        ]
      },
      {
        tasks: [
          {
            type: "defeat_enemy",
            entity: "dbe:saibabrute",
            spawnOnStart: true
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
  },
  {
    id: "world_connections",
    type: "challenge",
    isHiddenActive: true,
    preDialogCount: 5,
    objectives: [
      {
        isRestartable: false,
        tasks: [
          { type: "interact_npc", entity: "dbe:beerus" },
          // { type: "interact_npc", entity: "dbe:bulma" },
          { type: "interact_npc", entity: "dbe:cell_npc" },
          // { type: "interact_npc", entity: "dbe:chi_chi" },
          { type: "interact_npc", entity: "dbe:enma_daioh" },
          { type: "interact_npc", entity: "dbe:goku" },
          { type: "interact_npc", entity: "dbe:kami_sama" },
          { type: "interact_npc", entity: "dbe:king_kai" },
          { type: "interact_npc", entity: "dbe:korin" },
          { type: "interact_npc", entity: "dbe:krillin" },
          { type: "interact_npc", entity: "dbe:master_roshi" },
          { type: "interact_npc", entity: "dbe:merchant" },
          { type: "interact_npc", entity: "dbe:mr_popo" },
          { type: "interact_npc", entity: "dbe:piccolo" },
          // { type: "interact_npc", entity: "dbe:porunga" },
          { type: "interact_npc", entity: "dbe:shenron" },
          { type: "interact_npc", entity: "dbe:unigame" },
          { type: "interact_npc", entity: "dbe:whis" }
        ]
      },
      {
        isRestartable: false,
        tasks: [
          {
            type: "interact_npc",
            entity: "dbe:akira_toriyama",
            dialogCount: 5
          }
        ]
      }
    ],
    rewards: [
      {
        type: "item",
        item: "dbe:music_disc_hero"
      },
      {
        type: "item",
        item: "dbe:dragon_ball",
        amount: 7
      },
      {
        type: "zeni",
        amount: 2e3
      }
    ]
  }
];
export {
  challenge_quests_data
};
