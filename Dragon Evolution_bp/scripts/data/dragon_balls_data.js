const dragonBallsData = [
  {
    blockId: "dbe:dragon_ball",
    cooldownMs: 6e5,
    maxWishes: 1,
    requiredBalls: 7,
    sourceId: "dbe:shenron",
    spawnSound: "music.game.shenron_theme",
    spawnRules: [
      {
        dimensionId: "overworld",
        spawnRadius: 4096
      }
    ]
  },
  {
    blockId: "dbe:namek_dragon_ball",
    cooldownMs: 6e5,
    maxWishes: 3,
    requiredBalls: 7,
    sourceAnimation: "animation.porunga.dialogue",
    sourceId: "dbe:porunga",
    spawnSound: "music.game.porunga_theme",
    spawnRules: []
  }
];
export {
  dragonBallsData
};
