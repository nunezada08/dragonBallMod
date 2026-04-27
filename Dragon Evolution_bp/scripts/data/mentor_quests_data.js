const mentor_quests_data = [
  {
    id: "train_with_goku",
    type: "mentor",
    mentorId: "dbe:goku",
    preDialogCount: 3,
    requiredFriendshipLevel: 100,
    objectives: [
      {
        tasks: [
          {
            type: "defeat_enemy",
            entity: "dbe:goku_enemy",
            spawnOnStart: true,
            entityDefinitions: {
              friendlyDamage: true,
              attributes: {
                total: 36,
                focus: {
                  constitution: 1,
                  dexterity: 2,
                  spirit: 1,
                  strength: 2,
                  willpower: 3
                }
              },
              availableTransformations: [
                "base",
                "ssj"
              ]
            }
          }
        ]
      }
    ],
    rewards: [
      {
        type: "alignment_question",
        amountSource: "based_on_enemies"
      },
      {
        type: "item",
        item: "dbe:goku_chestplate"
      },
      {
        type: "item",
        item: "dbe:goku_leggings"
      },
      {
        type: "item",
        item: "dbe:goku_boots"
      },
      {
        type: "friendship_points",
        masterId: "dbe:goku",
        amount: 100
      },
      {
        type: "z_points",
        amountSource: "based_on_enemies"
      }
    ]
  }
];
export {
  mentor_quests_data
};
