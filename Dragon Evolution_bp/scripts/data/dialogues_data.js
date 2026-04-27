const dialogues_data = [
  {
    id: "akira_toriyama_main_menu",
    npcId: "dbe:akira_toriyama",
    title: "ui.dbe.npcAkiraToriyama.title",
    addQuest: {
      questId: "world_connections"
    },
    body: [
      {
        text: "ui.dbe.npcAkiraToriyamaMain.evilText",
        requirements: {
          alignment: "evil"
        }
      },
      {
        text: "ui.dbe.npcAkiraToriyamaMain.neutralText",
        requirements: {
          alignment: "neutral"
        }
      },
      {
        text: "ui.dbe.npcAkiraToriyamaMain.goodText",
        requirements: {
          alignment: "good"
        }
      }
    ]
  },
  {
    id: "beerus_main_menu",
    npcId: "dbe:beerus",
    title: "ui.dbe.npcBeerus.title",
    body: [
      {
        text: "ui.dbe.npcBeerusMain.evilText",
        requirements: {
          alignment: "evil"
        }
      },
      {
        text: "ui.dbe.npcBeerusMain.neutralText",
        requirements: {
          alignment: "neutral"
        }
      },
      {
        text: "ui.dbe.npcBeerusMain.goodText",
        requirements: {
          alignment: "good"
        }
      }
    ],
    buttons: [
      {
        buttonText: "ui.dbe.npcBeerusMain.skillsButton",
        nextDialogue: "beerus_skills"
      }
    ],
    requirements: {
      skills: ["divine_ki"]
    },
    subMenus: [
      {
        id: "beerus_skills",
        backButtonDialogue: "beerus_main_menu",
        type: "skills"
      }
    ]
  },
  {
    id: "bulma_main_menu",
    npcId: "dbe:bulma",
    title: "ui.dbe.npcBulma.title",
    body: [
      {
        text: "ui.dbe.npcBulmaMain.evilText",
        requirements: {
          alignment: "evil"
        }
      },
      {
        text: "ui.dbe.npcBulmaMain.neutralText",
        requirements: {
          alignment: "neutral"
        }
      },
      {
        text: "ui.dbe.npcBulmaMain.goodText",
        requirements: {
          alignment: "good"
        }
      }
    ],
    buttons: [
      {
        buttonText: "ui.dbe.npcBulmaMain.shopButton",
        nextDialogue: "bulma_shop",
        requirements: {
          alignment: ["good", "neutral"]
        }
      }
    ],
    subMenus: [
      {
        id: "bulma_shop",
        backButtonDialogue: "bulma_main_menu",
        type: "shop"
      }
    ]
  },
  {
    id: "cell_main_menu",
    npcId: "dbe:cell_npc",
    title: "ui.dbe.npcCell.title",
    body: [
      {
        text: "ui.dbe.npcCellMain.evilText",
        requirements: {
          alignment: "evil"
        }
      },
      {
        text: "ui.dbe.npcCellMain.neutralText",
        requirements: {
          alignment: "neutral"
        }
      },
      {
        text: "ui.dbe.npcCellMain.goodText",
        requirements: {
          alignment: "good"
        }
      }
    ],
    buttons: [
      {
        buttonText: "ui.dbe.npcCellMain.skillsButton",
        nextDialogue: "cell_skills",
        requirements: {
          alignment: "evil"
        }
      }
    ],
    subMenus: [
      {
        id: "cell_skills",
        backButtonDialogue: "cell_main_menu",
        type: "skills"
      }
    ]
  },
  {
    id: "chi_chi_main_menu",
    npcId: "dbe:chi_chi",
    title: "ui.dbe.npcChiChi.title",
    body: [
      {
        text: "ui.dbe.npcChiChiMain.evilText",
        requirements: {
          alignment: "evil"
        }
      },
      {
        text: "ui.dbe.npcChiChiMain.neutralText",
        requirements: {
          alignment: "neutral"
        }
      },
      {
        text: "ui.dbe.npcChiChiMain.goodText",
        requirements: {
          alignment: "good"
        }
      }
    ],
    buttons: [
      {
        buttonText: "ui.dbe.npcChiChiMain.shopButton",
        nextDialogue: "chi_chi_shop",
        requirements: {
          alignment: ["good", "neutral"]
        }
      }
    ],
    subMenus: [
      {
        id: "chi_chi_shop",
        backButtonDialogue: "chi_chi_main_menu",
        type: "shop"
      }
    ]
  },
  {
    id: "goku_main_menu",
    npcId: "dbe:goku",
    title: "ui.dbe.npcGoku.title",
    body: [
      {
        text: "ui.dbe.npcGokuMain.evilText",
        requirements: {
          alignment: ["evil"]
        }
      },
      {
        text: "ui.dbe.npcGokuMain.neutralText",
        requirements: {
          alignment: ["neutral"]
        }
      },
      {
        text: "ui.dbe.npcGokuMain.goodText",
        requirements: {
          alignment: ["good"]
        }
      }
    ],
    addQuest: {
      questId: "train_with_goku",
      requirements: {
        alignment: ["good", "neutral"]
      }
    },
    buttons: [
      {
        buttonText: "ui.dbe.npcGokuMain.weightButton",
        nextDialogue: "weight",
        requirements: {
          completedQuests: ["train_with_goku"]
        }
      },
      {
        buttonText: "ui.dbe.npcGokuMain.skillsButton",
        nextDialogue: "goku_skills",
        requirements: {
          completedQuests: ["train_with_goku"]
        }
      }
    ],
    subMenus: [
      {
        id: "weight",
        title: "ui.dbe.npcGoku.title",
        body: "ui.dbe.weight.text",
        backButtonDialogue: "goku_main_menu",
        buttons: [
          {
            buttonText: "ui.dbe.npcGokuWeight.catchButton",
            rewards: [
              { type: "item", item: "dbe:training_shirt" }
            ]
          }
        ]
      },
      {
        id: "goku_skills",
        backButtonDialogue: "goku_main_menu",
        type: "skills"
      }
    ]
  },
  {
    id: "king_kai_main_menu",
    npcId: "dbe:king_kai",
    title: "ui.dbe.npcKingKai.title",
    body: [
      {
        text: "ui.dbe.npcKingKaiMain.evilText",
        requirements: {
          alignment: ["evil"]
        }
      },
      {
        text: "ui.dbe.npcKingKaiMain.neutralText",
        requirements: {
          alignment: ["neutral"]
        }
      },
      {
        text: "ui.dbe.npcKingKaiMain.goodText",
        requirements: {
          alignment: ["good"]
        }
      }
    ],
    buttons: [
      {
        buttonText: "ui.dbe.npcKingKaiMain.weightButton",
        nextDialogue: "weight",
        requirements: {
          alignment: ["good", "neutral"]
        }
      },
      {
        buttonText: "ui.dbe.npcKingKaiMain.skillsButton",
        nextDialogue: "king_kai_skills",
        requirements: {
          alignment: ["good", "neutral"]
        }
      }
    ],
    subMenus: [
      {
        id: "weight",
        title: "ui.dbe.npcKingKai.title",
        body: "ui.dbe.weight.text",
        backButtonDialogue: "king_kai_main_menu",
        buttons: [
          {
            buttonText: "ui.dbe.npcKingKaiWeight.catchButton",
            rewards: [
              { type: "item", item: "dbe:workout_weights" }
            ]
          }
        ]
      },
      {
        id: "king_kai_skills",
        backButtonDialogue: "king_kai_main_menu",
        type: "skills"
      }
    ]
  },
  {
    id: "krillin_main_menu",
    npcId: "dbe:krillin",
    title: "ui.dbe.npcKrillin.title",
    body: [
      {
        text: "ui.dbe.npcKrillinMain.evilText",
        requirements: {
          alignment: "evil"
        }
      },
      {
        text: "ui.dbe.npcKrillinMain.neutralText",
        requirements: {
          alignment: "neutral"
        }
      },
      {
        text: "ui.dbe.npcKrillinMain.goodText",
        requirements: {
          alignment: "good"
        }
      }
    ],
    buttons: [
      {
        buttonText: "ui.dbe.npcKrillinMain.skillsButton",
        nextDialogue: "krillin_skills"
      }
    ],
    subMenus: [
      {
        id: "krillin_skills",
        backButtonDialogue: "krillin_main_menu",
        type: "skills"
      }
    ]
  },
  {
    id: "master_roshi_main_menu",
    npcId: "dbe:master_roshi",
    title: "ui.dbe.npcMasterRoshi.title",
    body: [
      {
        text: "ui.dbe.npcMasterRoshiMain.evilText",
        requirements: {
          alignment: ["evil"]
        }
      },
      {
        text: "ui.dbe.npcMasterRoshiMain.neutralText",
        requirements: {
          alignment: ["neutral"]
        }
      },
      {
        text: "ui.dbe.npcMasterRoshiMain.goodText",
        requirements: {
          alignment: ["good"]
        }
      }
    ],
    addQuest: {
      questId: "fetch_bulma_outfit",
      requirements: {
        alignment: ["good", "neutral"]
      }
    },
    buttons: [
      {
        buttonText: "ui.dbe.npcMasterRoshiMain.weightButton",
        nextDialogue: "weight",
        requirements: {
          alignment: ["good", "neutral"],
          completedQuests: ["fetch_bulma_outfit"]
        }
      },
      {
        buttonText: "ui.dbe.npcMasterRoshiMain.skillsButton",
        nextDialogue: "master_roshi_skills",
        requirements: {
          alignment: ["good", "neutral"],
          completedQuests: ["fetch_bulma_outfit"]
        }
      }
    ],
    subMenus: [
      {
        id: "weight",
        title: "ui.dbe.npcMasterRoshi.title",
        body: "ui.dbe.weight.text",
        backButtonDialogue: "master_roshi_main_menu",
        buttons: [
          {
            buttonText: "ui.dbe.npcMasterRoshiWeight.catchButton",
            rewards: [
              { type: "item", item: "dbe:turtle_shell" }
            ]
          }
        ]
      },
      {
        id: "master_roshi_skills",
        backButtonDialogue: "master_roshi_main_menu",
        type: "skills"
      }
    ]
  },
  {
    id: "merchant_main_menu",
    npcId: "dbe:merchant",
    title: "ui.dbe.npcMerchant.title",
    body: [
      {
        text: "ui.dbe.npcMerchantMain.evilText",
        requirements: {
          alignment: "evil"
        }
      },
      {
        text: "ui.dbe.npcMerchantMain.neutralText",
        requirements: {
          alignment: "neutral"
        }
      },
      {
        text: "ui.dbe.npcMerchantMain.goodText",
        requirements: {
          alignment: "good"
        }
      }
    ],
    buttons: [
      {
        buttonText: "ui.dbe.npcMerchantMain.clothingShopButton",
        nextDialogue: "clothing_shop"
      }
    ],
    subMenus: [
      {
        id: "clothing_shop",
        backButtonDialogue: "merchant_main_menu",
        type: "shop"
      }
    ]
  },
  {
    id: "mr_popo_main_menu",
    npcId: "dbe:mr_popo",
    title: "ui.dbe.npcMrPopo.title",
    body: [
      {
        text: "ui.dbe.npcMrPopoMain.evilText",
        requirements: {
          alignment: "evil"
        }
      },
      {
        text: "ui.dbe.npcMrPopoMain.neutralText",
        requirements: {
          alignment: "neutral"
        }
      },
      {
        text: "ui.dbe.npcMrPopoMain.goodText",
        requirements: {
          alignment: "good"
        }
      }
    ],
    buttons: [
      {
        buttonText: "ui.dbe.npcMrPopoMain.skillsButton",
        nextDialogue: "mr_popo_skills",
        requirements: {
          alignment: ["good", "neutral"]
        }
      }
    ],
    subMenus: [
      {
        id: "mr_popo_skills",
        backButtonDialogue: "mr_popo_main_menu",
        type: "skills"
      }
    ]
  },
  {
    id: "piccolo_main_menu",
    npcId: "dbe:piccolo",
    title: "ui.dbe.npcPiccolo.title",
    body: [
      {
        text: "ui.dbe.npcPiccoloMain.evilText",
        requirements: {
          alignment: ["evil"]
        }
      },
      {
        text: "ui.dbe.npcPiccoloMain.neutralText",
        requirements: {
          alignment: ["neutral"]
        }
      },
      {
        text: "ui.dbe.npcPiccoloMain.goodText",
        requirements: {
          alignment: ["good"]
        }
      }
    ],
    buttons: [
      {
        buttonText: "ui.dbe.npcPiccoloMain.weightButton",
        nextDialogue: "weight"
      },
      {
        buttonText: "ui.dbe.npcPiccoloMain.skillsButton",
        nextDialogue: "piccolo_skills"
      }
    ],
    subMenus: [
      {
        id: "weight",
        title: "ui.dbe.npcPiccolo.title",
        body: "ui.dbe.weight.text",
        backButtonDialogue: "piccolo_main_menu",
        buttons: [
          {
            buttonText: "ui.dbe.npcPiccoloweight.catchButton",
            rewards: [
              { type: "item", item: "dbe:piccolo_cape" }
            ]
          }
        ]
      },
      {
        id: "piccolo_skills",
        backButtonDialogue: "piccolo_main_menu",
        type: "skills"
      }
    ]
  },
  {
    id: "vegeta_main_menu",
    npcId: "dbe:vegeta_npc",
    title: "ui.dbe.npcVegeta.title",
    body: [
      {
        text: "ui.dbe.npcVegetaMain.evilText",
        requirements: {
          alignment: "evil"
        }
      },
      {
        text: "ui.dbe.npcVegetaMain.neutralText",
        requirements: {
          alignment: "neutral"
        }
      },
      {
        text: "ui.dbe.npcVegetaMain.goodText",
        requirements: {
          alignment: "good"
        }
      }
    ],
    buttons: [
      {
        buttonText: "ui.dbe.npcVegetaMain.skillsButton",
        nextDialogue: "vegeta_skills"
      }
    ],
    subMenus: [
      {
        id: "vegeta_skills",
        backButtonDialogue: "vegeta_main_menu",
        type: "skills"
      }
    ]
  },
  {
    id: "unigame_main_menu",
    npcId: "dbe:unigame",
    title: "ui.dbe.npcUnigame.title",
    addQuest: {
      questId: "pirate_robot_treasure",
      requirements: {
        alignment: ["good", "neutral"]
      }
    },
    body: [
      {
        text: "ui.dbe.npcUnigameMain.evilText",
        requirements: {
          alignment: "evil"
        }
      },
      {
        text: "ui.dbe.npcUnigameMain.neutralText",
        requirements: {
          alignment: "neutral"
        }
      },
      {
        text: "ui.dbe.npcUnigameMain.goodText",
        requirements: {
          alignment: "good"
        }
      }
    ]
  },
  {
    id: "whis_main_menu",
    npcId: "dbe:whis",
    title: "ui.dbe.npcWhis.title",
    body: [
      {
        text: "ui.dbe.npcWhisMain.evilText",
        requirements: {
          alignment: ["evil"]
        }
      },
      {
        text: "ui.dbe.npcWhisMain.neutralText",
        requirements: {
          alignment: ["neutral"]
        }
      },
      {
        text: "ui.dbe.npcWhisMain.goodText",
        requirements: {
          alignment: ["good"]
        }
      }
    ],
    addQuest: {
      questId: "whis_ramen_delivery"
    },
    buttons: [
      {
        buttonText: "ui.dbe.npcWhisMain.weightButton",
        nextDialogue: "weight",
        requirements: {
          completedQuests: ["whis_ramen_delivery"]
        }
      },
      {
        buttonText: "ui.dbe.npcWhisMain.skillsButton",
        nextDialogue: "whis_skills",
        requirements: {
          completedQuests: ["whis_ramen_delivery"]
        }
      }
    ],
    requirements: {
      skills: ["divine_ki"]
    },
    subMenus: [
      {
        id: "weight",
        title: "ui.dbe.npcwhis.title",
        body: "ui.dbe.weight.text",
        backButtonDialogue: "whis_main_menu",
        buttons: [
          {
            buttonText: "ui.dbe.npcWhisWeight.catchButton",
            rewards: [
              { type: "item", item: "dbe:training_armor" }
            ]
          }
        ]
      },
      {
        id: "whis_skills",
        backButtonDialogue: "whis_main_menu",
        type: "skills"
      }
    ]
  }
];
export {
  dialogues_data
};
