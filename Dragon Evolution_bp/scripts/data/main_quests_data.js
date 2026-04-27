const main_quests_data = [
    {
        id: 'visit_lookout',
        type: 'main',
        objectives: [
            {
                isRestartable: false,
                tasks: [
                    {
                        type: 'dialog',
                        dialogCount: 3,
                    },
                ],
            },
            {
                isRestartable: false,
                tasks: [
                    {
                        type: 'enter_region',
                        region: 'lookout',
                    },
                ],
            },
            {
                isRestartable: false,
                tasks: [
                    {
                        type: 'interact_npc',
                        entity: 'dbe:korin',
                        dialogCount: 3,
                    },
                ],
            },
        ],
        rewards: [
            {
                type: 'zeni',
                amount: 10,
            },
        ],
    },
    {
        id: 'saga_saiyan_1',
        type: 'main',
        objectives: [
            {
                isRestartable: false,
                tasks: [
                    {
                        type: 'interact_npc',
                        entity: 'dbe:piccolo',
                        dialogCount: 3,
                    },
                    {
                        type: 'learn_skill',
                        skill: 'fly',
                        requirements: {
                            notSkills: ['fly'],
                        },
                    },
                ],
            },

            {
                tasks: [
                    {
                        type: 'defeat_enemy',
                        entity: 'dbe:raditz',
                        spawnOnStart: true,
                        entityDefinitions: {
                            attributes: {
                                total: 65,
                                focus: {
                                    constitution: 1.6,
                                    dexterity: 0.8,
                                    spirit: 1,
                                    strength: 1,
                                    willpower: 1,
                                },
                            },
                        },
                    },
                ],
            },
        ],

        rewards: [
            {
                type: 'alignment_question',
                amountSource: 'based_on_enemies',
            },
            {
                type: 'z_points',
                amountSource: 'based_on_enemies',
            },
            {
                type: 'give_quest',
                quest: 'piccolo_trial',
            },
        ],
    },
    {
        id: 'saga_saiyan_2',
        type: 'main',
        objectives: [
            {
                isRestartable: false,
                tasks: [
                    {
                        type: 'enter_region',
                        region: 'king_kai_planet',
                    },
                ],
            },
            {
                isRestartable: false,
                tasks: [
                    {
                        type: 'interact_npc',
                        entity: 'dbe:king_kai',
                        dialogCount: 3,
                    },
                ],
            },
            {
                autoStart: false,
                isRestartable: false,
                tasks: [
                    {
                        type: 'use_training_weight',
                        item: 'dbe:workout_weights',
                    },
                    {
                        type: 'defeat_enemy',
                        entity: 'dbe:shadow_dummy',
                        count: 3,
                        spawnOnStart: false,
                        entityDefinitions: {
                            friendlyDamage: true,
                        },
                    },
                ],
            },
            {
                isRestartable: false,
                tasks: [
                    {
                        type: 'interact_npc',
                        entity: 'dbe:king_kai',
                        dialogCount: 3,
                    },
                ],
            },
            {
                isRestartable: false,
                teleportOnStart: 'lookout',
                tasks: [
                    {
                        type: 'interact_npc',
                        entity: 'dbe:kami_sama',
                        dialogCount: 3,
                    },
                ],
            },
        ],
        rewards: [
            {
                type: 'alignment_question',
                amountSource: 'based_on_enemies',
            },
            {
                type: 'z_points',
                amountSource: 'based_on_enemies',
            },
        ],
    },
    {
        id: 'saga_saiyan_3',
        type: 'main',
        objectives: [
            {
                isRestartable: false,
                tasks: [
                    {
                        type: 'defeat_enemy',
                        entity: 'dbe:saibaman',
                        count: 3,
                        spawnOnStart: true,
                    },
                ],
            },
            {
                isRestartable: false,
                tasks: [
                    {
                        type: 'defeat_enemy',
                        entity: 'dbe:saibaman',
                        count: 6,
                        spawnOnStart: true,
                    },
                ],
            },
        ],
        rewards: [
            {
                type: 'alignment_question',
                amountSource: 'based_on_enemies',
            },
            {
                type: 'z_points',
                amountSource: 'based_on_enemies',
            },
            {
                type: 'give_quest',
                quest: 'saibaman_challenge',
            },
        ],
    },
    {
        id: 'saga_saiyan_4',
        type: 'main',
        objectives: [
            {
                tasks: [
                    {
                        type: 'defeat_enemy',
                        entity: 'dbe:nappa',
                        spawnOnStart: true,
                        entityDefinitions: {
                            attributes: {
                                total: 80,
                                focus: {
                                    constitution: 2,
                                    dexterity: 1,
                                    spirit: 1,
                                    strength: 1,
                                    willpower: 1,
                                },
                            },
                            availableTransformations: ['base', 'oozaru'],
                        },
                    },
                    {
                        type: 'defeat_enemy',
                        entity: 'dbe:vegeta',
                        spawnOnStart: true,
                        entityDefinitions: {
                            attributes: {
                                total: 90,
                                focus: {
                                    constitution: 1.5,
                                    dexterity: 1,
                                    spirit: 1,
                                    strength: 1,
                                    willpower: 1,
                                },
                            },
                            availableTransformations: ['base', 'oozaru'],
                        },
                    },
                ],
            },
        ],
        rewards: [
            {
                type: 'alignment_question',
                amountSource: 'based_on_enemies',
            },
            {
                type: 'zeni',
                amountSource: 'based_on_enemies',
            },
            {
                type: 'z_points',
                amountSource: 'based_on_enemies',
            },
        ],
    },
    {
        id: 'saga_frieza_1',
        type: 'main',
        objectives: [
            {
                isRestartable: false,
                tasks: [
                    {
                        type: 'dialog',
                        dialogCount: 4,
                    },
                ],
            },
            {
                isRestartable: false,
                tasks: [
                    {
                        type: 'enter_biome',
                        biome: 'dbe:namek',
                    },
                ],
            },
            {
                isRestartable: false,
                tasks: [
                    {
                        type: 'dialog',
                        dialogCount: 2,
                    },
                ],
            },
            {
                tasks: [
                    {
                        type: 'defeat_enemy',
                        entity: 'dbe:frieza_soldier',
                        count: 3,
                        spawnOnStart: true,
                        entityDefinitions: {
                            attributes: {
                                total: 50,
                                focus: {
                                    constitution: 1.5,
                                    dexterity: 1,
                                    spirit: 1,
                                    strength: 1,
                                    willpower: 1,
                                },
                            },
                        },
                    },
                ],
            },
            {
                tasks: [
                    {
                        type: 'defeat_enemy',
                        entity: 'dbe:frieza_soldier',
                        count: 6,
                        spawnOnStart: true,
                        entityDefinitions: {
                            attributes: {
                                total: 50,
                                focus: {
                                    constitution: 1.5,
                                    dexterity: 1,
                                    spirit: 1,
                                    strength: 1,
                                    willpower: 1,
                                },
                            },
                        },
                    },
                ],
            },
        ],
        rewards: [
            {
                type: 'alignment_question',
                amountSource: 'based_on_enemies',
            },
            {
                type: 'z_points',
                amountSource: 'based_on_enemies',
            },
        ],
    },
    {
        id: 'saga_frieza_2',
        type: 'main',
        objectives: [
            {
                isRestartable: false,
                tasks: [
                    {
                        type: 'enter_biome',
                        biome: 'dbe:namek',
                    },
                ],
            },
            {
                tasks: [
                    {
                        type: 'defeat_enemy',
                        entity: 'dbe:cui',
                        spawnOnStart: true,
                        entityDefinitions: {
                            attributes: {
                                total: 85,
                                focus: {
                                    constitution: 1.6,
                                    dexterity: 1,
                                    spirit: 1,
                                    strength: 1,
                                    willpower: 1,
                                },
                            },
                        },
                    },
                ],
            },
        ],
        rewards: [
            {
                type: 'alignment_question',
                amountSource: 'based_on_enemies',
            },
            {
                type: 'z_points',
                amountSource: 'based_on_enemies',
            },
        ],
    },
    {
        id: 'saga_frieza_3',
        type: 'main',
        objectives: [
            {
                tasks: [
                    {
                        type: 'defeat_enemy',
                        entity: 'dbe:dodoria',
                        spawnOnStart: true,
                        entityDefinitions: {
                            attributes: {
                                total: 100,
                                focus: {
                                    constitution: 1.6,
                                    dexterity: 1,
                                    spirit: 1,
                                    strength: 1,
                                    willpower: 1,
                                },
                            },
                        },
                    },
                    {
                        type: 'defeat_enemy',
                        entity: 'dbe:zarbon',
                        spawnOnStart: true,
                        entityDefinitions: {
                            attributes: {
                                total: 90,
                                focus: {
                                    constitution: 1.5,
                                    dexterity: 1,
                                    spirit: 1,
                                    strength: 1,
                                    willpower: 1,
                                },
                            },
                            availableTransformations: ['final_form'],
                        },
                    },
                ],
            },
        ],
        rewards: [
            {
                type: 'alignment_question',
                amountSource: 'based_on_enemies',
            },
            {
                type: 'z_points',
                amountSource: 'based_on_enemies',
            },
        ],
    },
    {
        id: 'saga_frieza_4',
        type: 'main',
        objectives: [
            {
                isRestartable: false,
                tasks: [
                    {
                        type: 'enter_biome',
                        biome: 'dbe:namek',
                    },
                ],
            },
            {
                tasks: [
                    {
                        type: 'defeat_enemy',
                        entity: 'dbe:guldo',
                        spawnOnStart: true,
                        entityDefinitions: {
                            attributes: {
                                total: 60,
                                focus: {
                                    constitution: 1.5,
                                    dexterity: 0.9,
                                    spirit: 1,
                                    strength: 0.9,
                                    willpower: 1.1,
                                },
                            },
                        },
                    },
                    {
                        type: 'defeat_enemy',
                        entity: 'dbe:recoome',
                        spawnOnStart: true,
                        entityDefinitions: {
                            attributes: {
                                total: 105,
                                focus: {
                                    constitution: 2,
                                    dexterity: 1.2,
                                    spirit: 1,
                                    strength: 1.2,
                                    willpower: 1,
                                },
                            },
                        },
                    },
                ],
            },
        ],
        rewards: [
            {
                type: 'alignment_question',
                amountSource: 'based_on_enemies',
            },
            {
                type: 'z_points',
                amountSource: 'based_on_enemies',
            },
        ],
    },
    {
        id: 'saga_frieza_6',
        type: 'main',
        objectives: [
            {
                isRestartable: false,
                tasks: [
                    {
                        type: 'enter_biome',
                        biome: 'dbe:namek',
                    },
                ],
            },
            {
                tasks: [
                    {
                        type: 'defeat_enemy',
                        entity: 'dbe:burter',
                        spawnOnStart: true,
                        entityDefinitions: {
                            attributes: {
                                total: 110,
                                focus: {
                                    constitution: 2,
                                    dexterity: 1.4,
                                    spirit: 1,
                                    strength: 1,
                                    willpower: 1,
                                },
                            },
                        },
                    },
                    {
                        type: 'defeat_enemy',
                        entity: 'dbe:jeice',
                        spawnOnStart: true,
                        entityDefinitions: {
                            attributes: {
                                total: 110,
                                focus: {
                                    constitution: 2,
                                    dexterity: 1,
                                    spirit: 1,
                                    strength: 1,
                                    willpower: 1,
                                },
                            },
                        },
                    },
                ],
            },
        ],
        rewards: [
            {
                type: 'alignment_question',
                amountSource: 'based_on_enemies',
            },
            {
                type: 'z_points',
                amountSource: 'based_on_enemies',
            },
        ],
    },
    {
        id: 'saga_frieza_7',
        type: 'main',
        objectives: [
            {
                isRestartable: false,
                tasks: [
                    {
                        type: 'enter_biome',
                        biome: 'dbe:namek',
                    },
                ],
            },
            {
                tasks: [
                    {
                        type: 'defeat_enemy',
                        entity: 'dbe:ginyu',
                        spawnOnStart: true,
                        entityDefinitions: {
                            attributes: {
                                total: 115,
                                focus: {
                                    constitution: 2,
                                    dexterity: 1.2,
                                    spirit: 1,
                                    strength: 1.2,
                                    willpower: 1,
                                },
                            },
                        },
                    },
                    {
                        type: 'defeat_enemy',
                        entity: 'dbe:guldo',
                        spawnOnStart: true,
                        entityDefinitions: {
                            attributes: {
                                total: 60,
                                focus: {
                                    constitution: 1.5,
                                    dexterity: 0.9,
                                    spirit: 1,
                                    strength: 0.9,
                                    willpower: 1.1,
                                },
                            },
                        },
                    },
                    {
                        type: 'defeat_enemy',
                        entity: 'dbe:recoome',
                        spawnOnStart: true,
                        entityDefinitions: {
                            attributes: {
                                total: 90,
                                focus: {
                                    constitution: 1.8,
                                    dexterity: 1.2,
                                    spirit: 1,
                                    strength: 1.2,
                                    willpower: 1,
                                },
                            },
                        },
                    },
                    {
                        type: 'defeat_enemy',
                        entity: 'dbe:burter',
                        spawnOnStart: true,
                        entityDefinitions: {
                            attributes: {
                                total: 110,
                                focus: {
                                    constitution: 1.8,
                                    dexterity: 1.4,
                                    spirit: 1,
                                    strength: 1,
                                    willpower: 1,
                                },
                            },
                        },
                    },
                    {
                        type: 'defeat_enemy',
                        entity: 'dbe:jeice',
                        spawnOnStart: true,
                        entityDefinitions: {
                            attributes: {
                                total: 110,
                                focus: {
                                    constitution: 1.8,
                                    dexterity: 1,
                                    spirit: 1,
                                    strength: 1,
                                    willpower: 1,
                                },
                            },
                        },
                    },
                ],
            },
        ],
        rewards: [
            {
                type: 'alignment_question',
                amountSource: 'based_on_enemies',
            },
            {
                type: 'z_points',
                amountSource: 'based_on_enemies',
            },
        ],
    },
    {
        id: 'saga_frieza_8',
        type: 'main',
        objectives: [
            {
                isRestartable: false,
                tasks: [
                    {
                        type: 'enter_biome',
                        biome: 'dbe:namek',
                    },
                ],
            },
            {
                tasks: [
                    {
                        type: 'defeat_enemy',
                        entity: 'dbe:frieza',
                        spawnOnStart: true,
                        entityDefinitions: {
                            attributes: {
                                total: 400,
                                focus: {
                                    constitution: 1.6,
                                    dexterity: 1.2,
                                    spirit: 1,
                                    strength: 1.2,
                                    willpower: 1.2,
                                },
                            },
                            availableTransformations: ['base', 'fourth_form'],
                        },
                    },
                ],
            },
        ],
        rewards: [
            {
                type: 'alignment_question',
                amountSource: 'based_on_enemies',
            },
            {
                type: 'z_points',
                amountSource: 'based_on_enemies',
            },
        ],
    },
    {
        id: 'saga_frieza_9',
        type: 'main',
        objectives: [
            {
                isRestartable: false,
                tasks: [
                    {
                        type: 'enter_biome',
                        biome: 'dbe:namek',
                    },
                ],
            },
            {
                tasks: [
                    {
                        type: 'defeat_enemy',
                        entity: 'dbe:frieza',
                        spawnOnStart: true,
                        entityDefinitions: {
                            attributes: {
                                total: 410,
                                focus: {
                                    constitution: 1.5,
                                    dexterity: 1.2,
                                    spirit: 1,
                                    strength: 1.2,
                                    willpower: 1.2,
                                },
                            },
                            availableTransformations: ['full_power'],
                        },
                    },
                ],
            },
        ],
        rewards: [
            {
                type: 'alignment_question',
                amountSource: 'based_on_enemies',
            },
            {
                type: 'item',
                item: 'dbe:namek_dragon_ball',
                amount: 5,
            },
            {
                type: 'zeni',
                amountSource: 'based_on_enemies',
            },
            {
                type: 'z_points',
                amountSource: 'based_on_enemies',
            },
        ],
    },
    {
        id: 'saga_frieza_goku',
        type: 'main',
        objectives: [
            {
                isRestartable: false,
                tasks: [
                    {
                        type: 'enter_biome',
                        biome: 'dbe:namek',
                    },
                ],
            },
            {
                tasks: [
                    {
                        type: 'defeat_enemy',
                        entity: 'dbe:goku_enemy',
                        spawnOnStart: true,
                        entityDefinitions: {
                            friendlyDamage: true,
                            attributes: {
                                total: 150,
                                focus: {
                                    constitution: 2,
                                    dexterity: 1.2,
                                    spirit: 1,
                                    strength: 1.1,
                                    willpower: 1,
                                },
                            },
                            availableTransformations: ['ssj'],
                        },
                    },
                ],
            },
        ],
        rewards: [
            {
                type: 'alignment_question',
                amountSource: 'based_on_enemies',
            },
            {
                type: 'zeni',
                amountSource: 'based_on_enemies',
            },
            {
                type: 'z_points',
                amountSource: 'based_on_enemies',
            },
        ],
    },
    {
        id: 'saga_frieza_10',
        type: 'main',
        objectives: [
            {
                isRestartable: false,
                tasks: [
                    {
                        type: 'enter_biome',
                        biome: 'dbe:dirtstone',
                    },
                ],
            },
            {
                tasks: [
                    {
                        type: 'defeat_enemy',
                        entity: 'dbe:frieza_soldier',
                        count: 2,
                        spawnOnStart: true,
                        entityDefinitions: {
                            attributes: {
                                total: 130,
                                focus: {
                                    constitution: 1,
                                    dexterity: 1,
                                    spirit: 1,
                                    strength: 1,
                                    willpower: 0.8,
                                },
                            },
                        },
                    },
                ],
            },
            {
                tasks: [
                    {
                        type: 'defeat_enemy',
                        entity: 'dbe:frieza_soldier',
                        count: 4,
                        spawnOnStart: true,
                        entityDefinitions: {
                            attributes: {
                                total: 110,
                                focus: {
                                    constitution: 1,
                                    dexterity: 1,
                                    spirit: 1,
                                    strength: 1,
                                    willpower: 0.8,
                                },
                            },
                        },
                    },
                ],
            },
            {
                tasks: [
                    {
                        type: 'defeat_enemy',
                        entity: 'dbe:frieza_soldier',
                        count: 6,
                        spawnOnStart: true,
                        entityDefinitions: {
                            attributes: {
                                total: 90,
                                focus: {
                                    constitution: 1,
                                    dexterity: 1,
                                    spirit: 1,
                                    strength: 1,
                                    willpower: 0.8,
                                },
                            },
                        },
                    },
                ],
            },
        ],
        rewards: [
            {
                type: 'alignment_question',
                amountSource: 'based_on_enemies',
            },
            {
                type: 'z_points',
                amountSource: 'based_on_enemies',
            },
        ],
    },
    {
        id: 'saga_frieza_11',
        type: 'main',
        objectives: [
            {
                tasks: [
                    {
                        type: 'defeat_enemy',
                        entity: 'dbe:king_cold',
                        spawnOnStart: true,
                        entityDefinitions: {
                            attributes: {
                                total: 420,
                                focus: {
                                    constitution: 1.5,
                                    dexterity: 1.1,
                                    spirit: 1,
                                    strength: 1.1,
                                    willpower: 1,
                                },
                            },
                        },
                    },
                    {
                        type: 'defeat_enemy',
                        entity: 'dbe:frieza',
                        spawnOnStart: true,
                        entityDefinitions: {
                            attributes: {
                                total: 430,
                                focus: {
                                    constitution: 1.5,
                                    dexterity: 0.9,
                                    spirit: 1,
                                    strength: 1,
                                    willpower: 1,
                                },
                            },
                            availableTransformations: ['mecha_frieza'],
                        },
                    },
                ],
            },
        ],
        rewards: [
            {
                type: 'alignment_question',
                amountSource: 'based_on_enemies',
            },
            {
                type: 'z_points',
                amountSource: 'based_on_enemies',
            },
        ],
    },
    {
        id: 'saga_android_1',
        type: 'main',
        objectives: [
            {
                isRestartable: false,
                tasks: [
                    {
                        type: 'enter_region',
                        region: 'hyperbolic_time_chamber',
                    },
                    {
                        type: 'unlock_transformation',
                        race: 'saiyan',
                        transformation: 'assj',
                        requirements: {
                            race: 'saiyan',
                        },
                    },
                    {
                        type: 'defeat_enemy',
                        entity: 'dbe:shadow_dummy',
                        count: 2,
                        spawnOnStart: false,
                        entityDefinitions: {
                            friendlyDamage: true,
                        },
                    },
                ],
            },
        ],
        rewards: [
            {
                type: 'alignment_question',
                amountSource: 'based_on_enemies',
            },
            {
                type: 'z_points',
                amountSource: 'based_on_enemies',
            },
        ],
    },
    {
        id: 'saga_android_2',
        type: 'main',
        objectives: [
            {
                tasks: [
                    {
                        type: 'defeat_enemy',
                        entity: 'dbe:android_19',
                        spawnOnStart: true,
                        entityDefinitions: {
                            attributes: {
                                total: 460,
                                focus: {
                                    constitution: 1.7,
                                    dexterity: 1.1,
                                    spirit: 1,
                                    strength: 1,
                                    willpower: 1.1,
                                },
                            },
                            availableTransformations: ['base', 'buffed'],
                        },
                    },
                    {
                        type: 'defeat_enemy',
                        entity: 'dbe:android_20',
                        spawnOnStart: true,
                        entityDefinitions: {
                            attributes: {
                                total: 470,
                                focus: {
                                    constitution: 1.7,
                                    dexterity: 1,
                                    spirit: 1,
                                    strength: 1,
                                    willpower: 1.1,
                                },
                            },
                            availableTransformations: ['base', 'buffed'],
                        },
                    },
                ],
            },
        ],
        rewards: [
            {
                type: 'alignment_question',
                amountSource: 'based_on_enemies',
            },
            {
                type: 'z_points',
                amountSource: 'based_on_enemies',
            },
        ],
    },
    {
        id: 'saga_android_3',
        type: 'main',
        objectives: [
            {
                tasks: [
                    {
                        type: 'defeat_enemy',
                        entity: 'dbe:android_17',
                        spawnOnStart: true,
                        entityDefinitions: {
                            attributes: {
                                total: 520,
                                focus: {
                                    constitution: 1.8,
                                    dexterity: 1,
                                    spirit: 1,
                                    strength: 1.3,
                                    willpower: 1.3,
                                },
                            },
                        },
                    },
                    {
                        type: 'defeat_enemy',
                        entity: 'dbe:android_18',
                        spawnOnStart: true,
                        entityDefinitions: {
                            attributes: {
                                total: 520,
                                focus: {
                                    constitution: 1.8,
                                    dexterity: 1.1,
                                    spirit: 1,
                                    strength: 1.3,
                                    willpower: 1.3,
                                },
                            },
                        },
                    },
                ],
            },
        ],
        rewards: [
            {
                type: 'alignment_question',
                amountSource: 'based_on_enemies',
            },
            {
                type: 'z_points',
                amountSource: 'based_on_enemies',
            },
        ],
    },
    {
        id: 'saga_android_4',
        type: 'main',
        objectives: [
            {
                tasks: [
                    {
                        type: 'defeat_enemy',
                        entity: 'dbe:android_18',
                        spawnOnStart: true,
                        entityDefinitions: {
                            attributes: {
                                total: 530,
                                focus: {
                                    constitution: 1.8,
                                    dexterity: 1.1,
                                    spirit: 1,
                                    strength: 1.3,
                                    willpower: 1.3,
                                },
                            },
                        },
                    },
                ],
            },
        ],
        rewards: [
            {
                type: 'alignment_question',
                amountSource: 'based_on_enemies',
            },
            {
                type: 'z_points',
                amountSource: 'based_on_enemies',
            },
        ],
    },
    {
        id: 'saga_android_5',
        type: 'main',
        objectives: [
            {
                tasks: [
                    {
                        type: 'defeat_enemy',
                        entity: 'dbe:cell',
                        spawnOnStart: true,
                        entityDefinitions: {
                            attributes: {
                                total: 500,
                                focus: {
                                    constitution: 1.5,
                                    dexterity: 1,
                                    spirit: 1,
                                    strength: 1.1,
                                    willpower: 1,
                                },
                            },
                            availableTransformations: ['base', 'semi_perfect'],
                        },
                    },
                ],
            },
            {
                tasks: [
                    {
                        type: 'defeat_enemy',
                        entity: 'dbe:cell_junior',
                        count: 4,
                        spawnOnStart: true,
                        entityDefinitions: {
                            attributes: {
                                total: 200,
                                focus: {
                                    constitution: 1,
                                    dexterity: 1.5,
                                    spirit: 1,
                                    strength: 1.3,
                                    willpower: 1,
                                },
                            },
                            availableTransformations: ['perfect'],
                        },
                    },
                ],
            },
            {
                tasks: [
                    {
                        type: 'defeat_enemy',
                        entity: 'dbe:cell',
                        spawnOnStart: true,
                        entityDefinitions: {
                            attributes: {
                                total: 450,
                                focus: {
                                    constitution: 1,
                                    dexterity: 1,
                                    spirit: 1,
                                    strength: 1.1,
                                    willpower: 1,
                                },
                            },
                            availableTransformations: ['super_perfect']
                        },
                    },
                ],
            },
        ],
        rewards: [
            {
                type: 'alignment_question',
                amountSource: 'based_on_enemies',
            },
            {
                type: 'zeni',
                amountSource: 'based_on_enemies',
            },
            {
                type: 'z_points',
                amountSource: 'based_on_enemies',
            },
        ],
    },
    {
        id: 'saga_majin_1',
        type: 'main',
        objectives: [
            {
                tasks: [
                    {
                        type: 'defeat_enemy',
                        entity: 'dbe:puipui',
                        spawnOnStart: true,
                        entityDefinitions: {
                            attributes: {
                                total: 530,
                                focus: {
                                    constitution: 1,
                                    dexterity: 1.2,
                                    spirit: 1,
                                    strength: 1,
                                    willpower: 1,
                                },
                            },
                        },
                    },
                ],
            },
        ],
        rewards: [
            {
                type: 'alignment_question',
                amountSource: 'based_on_enemies',
            },
            {
                type: 'z_points',
                amountSource: 'based_on_enemies',
            },
        ],
    },
    {
        id: 'saga_majin_2',
        type: 'main',
        objectives: [
            {
                tasks: [
                    {
                        type: 'defeat_enemy',
                        entity: 'dbe:yakon',
                        spawnOnStart: true,
                        entityDefinitions: {
                            attributes: {
                                total: 540,
                                focus: {
                                    constitution: 1,
                                    dexterity: 1.2,
                                    spirit: 1,
                                    strength: 1,
                                    willpower: 1.3,
                                },
                            },
                        },
                    },
                ],
            },
        ],
        rewards: [
            {
                type: 'alignment_question',
                amountSource: 'based_on_enemies',
            },
            {
                type: 'z_points',
                amountSource: 'based_on_enemies',
            },
        ],
    },
    {
        id: 'saga_majin_3',
        type: 'main',
        objectives: [
            {
                tasks: [
                    {
                        type: 'defeat_enemy',
                        entity: 'dbe:dabura',
                        spawnOnStart: true,
                        entityDefinitions: {
                            attributes: {
                                total: 660,
                                focus: {
                                    constitution: 1,
                                    dexterity: 1.6,
                                    spirit: 1,
                                    strength: 1.4,
                                    willpower: 1,
                                },
                            },
                        },
                    },
                ],
            },
        ],
        rewards: [
            {
                type: 'alignment_question',
                amountSource: 'based_on_enemies',
            },
            {
                type: 'z_points',
                amountSource: 'based_on_enemies',
            },
        ],
    },
    {
        id: 'saga_majin_4',
        type: 'main',
        objectives: [
            {
                tasks: [
                    {
                        type: 'defeat_enemy',
                        entity: 'dbe:majin_vegeta',
                        spawnOnStart: true,
                        entityDefinitions: {
                            attributes: {
                                total: 680,
                                focus: {
                                    constitution: 1,
                                    dexterity: 1.4,
                                    spirit: 1,
                                    strength: 1,
                                    willpower: 1.3,
                                },
                            },
                            availableTransformations: ['ssj2'],
                        },
                    },
                ],
            },
        ],
        rewards: [
            {
                type: 'alignment_question',
                amountSource: 'based_on_enemies',
            },
            {
                type: 'z_points',
                amountSource: 'based_on_enemies',
            },
        ],
    },
    {
        id: 'saga_majin_5',
        type: 'main',
        objectives: [
            {
                tasks: [
                    {
                        type: 'defeat_enemy',
                        entity: 'dbe:fat_buu',
                        spawnOnStart: true,
                        entityDefinitions: {
                            attributes: {
                                total: 800,
                                focus: {
                                    constitution: 1.5,
                                    dexterity: 1.2,
                                    spirit: 1,
                                    strength: 1,
                                    willpower: 1,
                                },
                            },
                        },
                    },
                ],
            },
        ],
        rewards: [
            {
                type: 'alignment_question',
                amountSource: 'based_on_enemies',
            },
            {
                type: 'z_points',
                amountSource: 'based_on_enemies',
            },
        ],
    },
    {
        id: 'saga_majin_6',
        type: 'main',
        objectives: [
            {
                tasks: [
                    {
                        type: 'defeat_enemy',
                        entity: 'dbe:super_buu',
                        spawnOnStart: true,
                        entityDefinitions: {
                            attributes: {
                                total: 290,
                                focus: {
                                    constitution: 1,
                                    dexterity: 1,
                                    spirit: 1,
                                    strength: 1,
                                    willpower: 1,
                                },
                            },
                            availableTransformations: [
                                'base',
                                'super_buu_gohan',
                                'super_buu_gotenks',
                            ],
                        },
                    },
                ],
            },
        ],
        rewards: [
            {
                type: 'alignment_question',
                amountSource: 'based_on_enemies',
            },
            {
                type: 'z_points',
                amountSource: 'based_on_enemies',
            },
        ],
    },
    {
        id: 'saga_majin_7',
        type: 'main',
        objectives: [
            {
                tasks: [
                    {
                        type: 'defeat_enemy',
                        entity: 'dbe:kid_buu',
                        spawnOnStart: true,
                        entityDefinitions: {
                            attributes: {
                                total: 510,
                                focus: {
                                    constitution: 1,
                                    dexterity: 1.3,
                                    spirit: 1,
                                    strength: 1.4,
                                    willpower: 1,
                                },
                            },
                        },
                    },
                ],
            },
        ],
        rewards: [
            {
                type: 'alignment_question',
                amountSource: 'based_on_enemies',
            },
            {
                type: 'zeni',
                amountSource: 'based_on_enemies',
            },
            {
                type: 'z_points',
                amountSource: 'based_on_enemies',
            },
        ],
    },
    {
        id: 'saga_beerus_1',
        type: 'main',
        objectives: [
            {
                isRestartable: false,
                tasks: [
                    {
                        type: 'interact_npc',
                        entity: 'dbe:whis',
                        dialogCount: 2,
                    },
                ],
            },
            {
                isRestartable: false,
                tasks: [
                    {
                        type: 'learn_skill',
                        skill: 'divine_ki',
                        requirements: {
                            notSkills: ['divine_ki'],
                        },
                    },
                ],
            },
            {
                autoStart: false,
                duration: 15e4,
                tasks: [
                    {
                        type: 'defeat_enemy',
                        entity: 'dbe:beerus_enemy',
                        spawnOnStart: true,
                        entityDefinitions: {
                            friendlyDamage: true,
                            attributes: {
                                total: 610,
                                focus: {
                                    constitution: 1,
                                    dexterity: 1.2,
                                    spirit: 1,
                                    strength: 1.2,
                                    willpower: 1.1,
                                },
                            },
                        },
                    },
                ],
            },
            {
                autoStart: false,
                tasks: [
                    {
                        type: 'dialog',
                        dialogCount: 2,
                    },
                ],
            },
        ],
        rewards: [
            {
                type: 'alignment_question',
                amountSource: 'based_on_enemies',
            },
            {
                type: 'zeni',
                amountSource: 'based_on_enemies',
            },
            {
                type: 'z_points',
                amountSource: 'based_on_enemies',
            },
        ],
    },
    {
        id: 'saga_golden_frieza_1',
        type: 'main',
        objectives: [
            {
                isRestartable: false,
                tasks: [
                    {
                        type: 'defeat_enemy',
                        entity: 'dbe:shadow_dummy',
                        count: 6,
                        spawnOnStart: false,
                        entityDefinitions: {
                            friendlyDamage: true,
                        },
                    },
                ],
            },
        ],
        rewards: [
            {
                type: 'alignment_question',
                amountSource: 'based_on_enemies',
            },
            {
                type: 'z_points',
                amountSource: 'based_on_enemies',
            },
        ],
    },
    {
        id: 'saga_golden_frieza_2',
        type: 'main',
        objectives: [
            {
                tasks: [
                    {
                        type: 'defeat_enemy',
                        entity: 'dbe:frieza_soldier',
                        count: 3,
                        spawnOnStart: true,
                        entityDefinitions: {
                            attributes: {
                                total: 80,
                                focus: {
                                    constitution: 1,
                                    dexterity: 1,
                                    spirit: 1,
                                    strength: 1,
                                    willpower: 0.8,
                                },
                            },
                        },
                    },
                ],
            },
            {
                tasks: [
                    {
                        type: 'defeat_enemy',
                        entity: 'dbe:frieza_soldier',
                        count: 6,
                        spawnOnStart: true,
                        entityDefinitions: {
                            attributes: {
                                total: 80,
                                focus: {
                                    constitution: 1,
                                    dexterity: 1,
                                    spirit: 1,
                                    strength: 1,
                                    willpower: 0.8,
                                },
                            },
                        },
                    },
                ],
            },
        ],
        rewards: [
            {
                type: 'alignment_question',
                amountSource: 'based_on_enemies',
            },
            {
                type: 'z_points',
                amountSource: 'based_on_enemies',
            },
        ],
    },
    {
        id: 'saga_golden_frieza_3',
        type: 'main',
        objectives: [
            {
                tasks: [
                    {
                        type: 'defeat_enemy',
                        entity: 'dbe:shisami',
                        spawnOnStart: true,
                        entityDefinitions: {
                            friendlyDamage: true,
                            attributes: {
                                total: 400,
                                focus: {
                                    constitution: 1.2,
                                    dexterity: 1.2,
                                    spirit: 1,
                                    strength: 1,
                                    willpower: 1,
                                },
                            },
                        },
                    },
                ],
            },
            {
                tasks: [
                    {
                        type: 'defeat_enemy',
                        entity: 'dbe:tagoma',
                        spawnOnStart: true,
                        entityDefinitions: {
                            friendlyDamage: true,
                            attributes: {
                                total: 420,
                                focus: {
                                    constitution: 1,
                                    dexterity: 1.2,
                                    spirit: 1,
                                    strength: 1,
                                    willpower: 1,
                                },
                            },
                        },
                    },
                ],
            },
        ],
        rewards: [
            {
                type: 'alignment_question',
                amountSource: 'based_on_enemies',
            },
            {
                type: 'z_points',
                amountSource: 'based_on_enemies',
            },
        ],
    },
    {
        id: 'saga_golden_frieza_4',
        type: 'main',
        objectives: [
            {
                tasks: [
                    {
                        type: 'defeat_enemy',
                        entity: 'dbe:frieza',
                        spawnOnStart: true,
                        entityDefinitions: {
                            attributes: {
                                total: 530,
                                focus: {
                                    constitution: 1.2,
                                    dexterity: 1.3,
                                    spirit: 1,
                                    strength: 1.1,
                                    willpower: 1,
                                },
                            },
                            availableTransformations: ['base', 'fourth_form', 'golden_form'],
                        },
                    },
                ],
            },
        ],
        rewards: [
            {
                type: 'alignment_question',
                amountSource: 'based_on_enemies',
            },
            {
                type: 'zeni',
                amountSource: 'based_on_enemies',
            },
            {
                type: 'z_points',
                amountSource: 'based_on_enemies',
            },
        ],
    },
    {
        id: 'saga_universe_6_1',
        type: 'main',
        objectives: [
            {
                isRestartable: false,
                tasks: [
                    {
                        type: 'interact_npc',
                        entity: 'dbe:piccolo',
                        dialogCount: 3,
                    },
                ],
            },
            {
                autoStart: false,
                tasks: [
                    {
                        type: 'defeat_enemy',
                        entity: 'dbe:piccolo_enemy',
                        spawnOnStart: true,
                        entityDefinitions: {
                            friendlyDamage: true,
                            attributes: {
                                total: 380,
                                focus: {
                                    constitution: 1,
                                    dexterity: 2,
                                    spirit: 1,
                                    strength: 2,
                                    willpower: 1.5,
                                },
                            },
                            availableTransformations: ['base', 'full_released'],
                        },
                    },
                ],
            },
            {
                isRestartable: false,
                tasks: [
                    {
                        type: 'interact_npc',
                        entity: 'dbe:goku',
                        dialogCount: 3,
                    },
                ],
            },
            {
                autoStart: false,
                tasks: [
                    {
                        type: 'defeat_enemy',
                        entity: 'dbe:goku_enemy',
                        spawnOnStart: true,
                        entityDefinitions: {
                            friendlyDamage: true,
                            attributes: {
                                total: 440,
                                focus: {
                                    constitution: 1,
                                    dexterity: 2,
                                    spirit: 1,
                                    strength: 2,
                                    willpower: 1.5,
                                },
                            },
                            availableTransformations: [
                                'base',
                                'ssj',
                                'ssj2',
                                'ssj3',
                                'ssjg',
                                'ssjb',
                            ],
                        },
                    },
                ],
            },
            {
                autoStart: false,
                tasks: [
                    {
                        type: 'dialog',
                        dialogCount: 1,
                    },
                ],
            },
        ],
        rewards: [
            {
                type: 'alignment_question',
                amountSource: 'based_on_enemies',
            },
            {
                type: 'z_points',
                amountSource: 'based_on_enemies',
            },
        ],
    },
    {
        id: 'saga_universe_6_2',
        type: 'main',
        objectives: [
            {
                tasks: [
                    {
                        type: 'defeat_enemy',
                        entity: 'dbe:botamo',
                        spawnOnStart: true,
                        entityDefinitions: {
                            attributes: {
                                total: 520,
                                focus: {
                                    constitution: 1.1,
                                    dexterity: 0.8,
                                    spirit: 1,
                                    strength: 0.8,
                                    willpower: 1,
                                },
                            },
                        },
                    },
                ],
            },
        ],
        rewards: [
            {
                type: 'alignment_question',
                amountSource: 'based_on_enemies',
            },
            {
                type: 'z_points',
                amountSource: 'based_on_enemies',
            },
        ],
    },
    {
        id: 'saga_universe_6_3',
        type: 'main',
        objectives: [
            {
                tasks: [
                    {
                        type: 'defeat_enemy',
                        entity: 'dbe:frost',
                        spawnOnStart: true,
                        entityDefinitions: {
                            attributes: {
                                total: 550,
                                focus: {
                                    constitution: 1.1,
                                    dexterity: 0.8,
                                    spirit: 1,
                                    strength: 0.8,
                                    willpower: 1,
                                },
                            },
                            availableTransformations: [
                                'base',
                                'second_form',
                                'third_form',
                                'fourth_form',
                            ],
                        },
                    },
                ],
            },
        ],
        rewards: [
            {
                type: 'alignment_question',
                amountSource: 'based_on_enemies',
            },
            {
                type: 'z_points',
                amountSource: 'based_on_enemies',
            },
        ],
    },
    {
        id: 'saga_universe_6_4',
        type: 'main',
        objectives: [
            {
                tasks: [
                    {
                        type: 'defeat_enemy',
                        entity: 'dbe:magetta',
                        spawnOnStart: true,
                        entityDefinitions: {
                            attributes: {
                                total: 580,
                                focus: {
                                    constitution: 1.1,
                                    dexterity: 0.8,
                                    spirit: 1,
                                    strength: 0.8,
                                    willpower: 1,
                                },
                            },
                        },
                    },
                ],
            },
        ],
        rewards: [
            {
                type: 'alignment_question',
                amountSource: 'based_on_enemies',
            },
            {
                type: 'z_points',
                amountSource: 'based_on_enemies',
            },
        ],
    },
    {
        id: 'saga_universe_6_5',
        type: 'main',
        objectives: [
            {
                tasks: [
                    {
                        type: 'defeat_enemy',
                        entity: 'dbe:cabba',
                        spawnOnStart: true,
                        entityDefinitions: {
                            attributes: {
                                total: 330,
                                focus: {
                                    constitution: 1.1,
                                    dexterity: 0.8,
                                    spirit: 1,
                                    strength: 0.8,
                                    willpower: 1,
                                },
                            },
                            availableTransformations: ['base', 'ssj'],
                        },
                    },
                ],
            },
        ],
        rewards: [
            {
                type: 'alignment_question',
                amountSource: 'based_on_enemies',
            },
            {
                type: 'z_points',
                amountSource: 'based_on_enemies',
            },
        ],
    },
    {
        id: 'saga_universe_6_6',
        type: 'main',
        objectives: [
            {
                tasks: [
                    {
                        type: 'defeat_enemy',
                        entity: 'dbe:hitto',
                        spawnOnStart: true,
                        entityDefinitions: {
                            attributes: {
                                total: 800,
                                focus: {
                                    constitution: 1.1,
                                    dexterity: 1.5,
                                    spirit: 1,
                                    strength: 0.8,
                                    willpower: 1,
                                },
                            },
                        },
                    },
                ],
            },
        ],
        rewards: [
            {
                type: 'alignment_question',
                amountSource: 'based_on_enemies',
            },
            {
                type: 'zeni',
                amountSource: 'based_on_enemies',
            },
            {
                type: 'z_points',
                amountSource: 'based_on_enemies',
            },
        ],
    },
];
export {
  main_quests_data
};
