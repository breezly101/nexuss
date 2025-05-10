const games = [
  { name: 'Bad Piggies', folder: 'games/badpiggies', icon: 'assets/images/pig.png' },
  { name: 'Eaglercraft', folder: 'games/eaglercraft', icon: 'assets/images/eaglercraft.png' },
  { name: 'Kirka', folder: 'games/kirka', icon: 'assets/images/kirka.png' },
  { name: 'Slowroads', folder: 'games/slowroads', icon: 'assets/images/slowroads.png' },
  { name: 'Super Mario 64', folder: 'games/sm64', icon: 'assets/images/mario.png' },
  { name: 'Geforce NOW', folder: 'games/geforce', icon: 'assets/images/gfnow.png' },
  { name: 'Engine Sim', folder: 'games/enginesounds', icon: 'assets/images/engine.png' },
  { name: 'Basketball Bros', folder: 'games/basketball', icon: 'assets/images/basketball.png' },
  { name: 'OvO', folder: 'games/OvO', icon: 'assets/images/ovo.png' },
  // add more games...
];

// Sort games alphabetically by name
games.sort((a, b) => a.name.localeCompare(b.name));