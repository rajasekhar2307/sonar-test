const sonarqubeScanner = require('sonarqube-scanner');
sonarqubeScanner(
  {
    serverUrl: 'http://localhost:9000',
    token: 'a9e877d19076e943af2e6a9c47b579f7df3d9454',
    options: {},
  },
  () => process.exit()
);
