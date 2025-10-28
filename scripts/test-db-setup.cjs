/* Spins up Postgres via Testcontainers for NODE_ENV=test and prints env */
const { GenericContainer } = require('testcontainers');
const fs = require('fs');

(async () => {
  if ((process.env.CI && process.env.USE_CI_SERVICE_DB === 'true') || process.env.NODOCKER === 'true') {
    process.exit(0);
  }

  const container = await new GenericContainer('postgres:16')
    .withEnvironment({
      POSTGRES_PASSWORD: 'test',
      POSTGRES_USER: 'test',
      POSTGRES_DB: 'app_test',
    })
    .withExposedPorts(5432)
    .start();

  const host = container.getHost();
  const port = container.getMappedPort(5432);

  const env = [
    `NODE_ENV=test`,
    `PGHOST=${host}`,
    `PGPORT=${port}`,
    `PGUSER=test`,
    `PGPASSWORD=test`,
    `PGDATABASE=app_test`,
  ].join('\n');

  fs.writeFileSync('.test-db.env', env);
  console.log(env);
  fs.writeFileSync('.test-db.cid', JSON.stringify({ host, port, id: container.getId() }));
})();
