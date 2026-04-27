import { variables } from "./variables";
const regionsData = [
  {
    id: "hyperbolic_time_chamber_exit_door",
    dimensionId: "the_end",
    priority: -1,
    pos1: {
      x: -50001,
      y: 241,
      z: -50006
    },
    pos2: {
      x: -49999,
      y: 243,
      z: -50006
    }
  },
  {
    id: "hyperbolic_time_chamber_join_door",
    dimensionId: "overworld",
    priority: -1,
    pos1: {
      x: 149,
      y: 300,
      z: 170
    },
    pos2: {
      x: 151,
      y: 302,
      z: 170
    },
    spawnLocation: {
      x: 150,
      y: 300,
      z: 169
    }
  },
  {
    id: "hyperbolic_time_chamber",
    dimensionId: "the_end",
    allowPvP: false,
    allowQuests: false,
    blockProtection: true,
    density: 1.5,
    pos1: {
      x: -50064,
      y: 238,
      z: -50064
    },
    pos2: {
      x: -49936,
      y: 320,
      z: -49936
    },
    spawnLocation: {
      x: -49999,
      y: 241,
      z: -50004
    }
  },
  {
    id: "king_kai_planet",
    dimensionId: "the_end",
    allowPvP: false,
    allowQuests: false,
    blockProtection: true,
    density: 1,
    pos1: {
      x: 49968,
      y: 193,
      z: 48968
    },
    pos2: {
      x: 50032,
      y: 320,
      z: 49032
    }
  },
  {
    id: "lookout",
    dimensionId: "overworld",
    allowPvP: false,
    allowQuests: false,
    blockProtection: true,
    pos1: {
      x: variables.lookoutLocation.x - 64,
      y: -64,
      z: variables.lookoutLocation.z - 64
    },
    pos2: {
      x: variables.lookoutLocation.x + 64,
      y: 320,
      z: variables.lookoutLocation.z + 64
    },
    spawnLocation: {
      x: 150.5,
      y: 299,
      z: 126.5
    }
  },
  {
    id: "other_world",
    dimensionId: "the_end",
    allowPvP: false,
    allowQuests: false,
    blockProtection: true,
    pos1: {
      x: 48e3,
      y: 170,
      z: 48e3
    },
    pos2: {
      x: 52e3,
      y: 320,
      z: 52e3
    },
    spawnLocation: {
      x: 5e4,
      y: 194,
      z: 50039
    }
  },
  {
    id: "world_martial_arts_tournament",
    dimensionId: "the_end",
    allowPvP: true,
    allowQuests: false,
    blockProtection: true,
    pos1: {
      x: -25064,
      y: 150,
      z: -25064
    },
    pos2: {
      x: -24936,
      y: 320,
      z: -24936
    },
    spawnLocation: {
      x: -25e3,
      y: 151,
      z: -25e3
    }
  }
];
export {
  regionsData
};
