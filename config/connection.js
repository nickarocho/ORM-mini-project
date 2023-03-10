const Sequelize = require('sequelize');
// TODO: use a package to read secret values in .env file

let sequelize;

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(
    // TODO: read the secret value for DB_NAME
    // TODO: read the secret value for DB_USER
    // TODO: read the secret value for DB_PASSWORD
    {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306
    }
  );
}

module.exports = sequelize;
