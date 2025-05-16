const games = [
  { name: 'Bad Piggies', folder: 'games/badpiggies', icon: 'assets/images/pig.png' },
  { name: 'Eaglercraft', folder: 'games/eaglercraft', icon: 'assets/images/eaglercraft.png' },
  { name: 'Kirka io', folder: 'games/kirka', icon: 'assets/images/kirka.png' },
  { name: 'Slowroads', folder: 'games/slowroads', icon: 'assets/images/slowroads.png' },
  { name: 'Super Mario 64', folder: 'games/sm64', icon: 'assets/images/mario.png' },
  { name: 'Engine Sim', folder: 'games/enginesounds', icon: 'assets/images/engine.png' },
  { name: 'Basketball Bros', folder: 'games/basketball', icon: 'assets/images/basketball.png' },
  { name: 'OvO', folder: 'games/OvO', icon: 'assets/images/ovo.png' },
  { name: 'Sonic Advance', folder: 'games/sonic advance', icon: 'assets/images/sonicadv.png' },
  { name: 'Resent Client (eaglercraft)', folder: 'games/resent_client', icon: 'assets/images/resent.png' },
  { name: 'Worlds Hardest Game', folder: 'games/hardestgame', icon: 'assets/images/hardestgame.png' },
  { name: 'Learn To Fly', folder: 'games/learntofly', icon: 'assets/images/fly.png' },
  { name: 'Super Mario 63 (Flash)', folder: 'games/supermario63', icon: 'assets/images/flash63.png' },
  { name: 'Super Mario 63 (Redux)', folder: 'games/sm63redux', icon: 'assets/images/supermario63.png' },
  // add more games...
];

// Sort games alphabetically by name
games.sort((a, b) => a.name.localeCompare(b.name));
