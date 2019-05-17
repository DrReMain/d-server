module.exports = {
  'development': {
    'username': 'postgres',
    'password': '123123',
    'database': 'd-server-dev',
    'host': '127.0.0.1',
    'port': 5432,
    'dialect': 'postgres'
  },
  'test': {
    'username': 'postgres',
    'password': '123123',
    'database': 'd-server-test',
    'host': '127.0.0.1',
    'port': 5432,
    'dialect': 'postgres'
  },
  'production': {
    'username': 'postgres',
    'password': '123123',
    'database': 'd-server-prod',
    'host': '127.0.0.1',
    'port': 5432,
    'dialect': 'postgres'

    // 'migrationStorage': 'json',
    // 'migrationStoragePath': 'sequelizeMeta.json',
    // 'seederStorage': 'json',
    // 'seederStoragePath': 'sequelizeData.json'
  }
};
