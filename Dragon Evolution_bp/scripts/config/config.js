const CONFIG = {
  /**
   * Valor máximo de cada atributo do jogador.
   */
  ATTRIBUTE_LIMIT: {
    "constitution": 5e5,
    "dexterity": 5e5,
    "spirit": 5e5,
    "strength": 5e5,
    "willpower": 5e5
  },
  /**
   * Preço de cada ponto de atributo.
   */
  ATTRIBUTE_COST: 5,
  /**
   * Tempo de recarga (ms) para recarregar as tentativas do treino de concentração.
   */
  CONCENTRATION_COOLDOWN_MS: 8e8,
  /**
   * Configurações da Máquina de Gravidade.
   */
  GRAVITY_MACHINE: {
    DENSITY: 3,
    REWARD_MODIFIER: 1
  },
  /**
   * Multiplicadores do Kaioken.
   */
  KAIOKEN_TIMES: [2, 3, 4, 10, 20],
  /**
   * Configurações do sistema de níveis.
   */
  LEVEL: {
    INITIAL_LEVEL: 1,
    INITIAL_XP: 0,
    TRAINING_POINTS_BONUS: 3,
    XP_PER_LEVEL: 150
  },
  /**
   * Pontos de treinamento concedidos pela Fruta do Poder.
   */
  POWER_FRUIT_TRAINING_POINTS: 5,
  /**
   * Multiplicadores de recompensa para diferentes ações.
   */
  REWARD_MODIFIERS: {
    DEFEAT_MOBS: 5,
    MASTERING: 1,
    TRAINING_WEIGHTS: 1,
    Z_POINTS: 4
  },
  /**
   * Tempo de recarga (ms) para reutilizar Sombras de Treinamento.
   */
  SHADOW_DUMMY_COOLDOWN_MS: 3e3,
  /**
   * Configurações do sistema de estamina.
   */
  STAMINA: {
    ENABLED: true,
    COOLDOWN_MS: 250
  }
};
export {
  CONFIG
};
