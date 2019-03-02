const config = require("config");

const Sequelize = require("sequelize");

const UserModel = require("./models/user");
const SchemaModel = require("./models/schema");
const SchemaFieldModel = require("./models/schema-field");

const sequelize = new Sequelize(
  config.get("database.name"),
  config.get("database.username"),
  config.get("database.password"),
  {
    host: config.get("database.host"),
    dialect: "mysql",
    pool: {
      max: 10,
      min: 0,
      acquire: 30000,
      idel: 10000
    }
  }
);

const User = UserModel(sequelize, Sequelize);

const Schema = SchemaModel(sequelize, Sequelize);

const SchemaField = SchemaFieldModel(sequelize, Sequelize);

Schema.belongsTo(User);

SchemaField.belongsTo(Schema);

sequelize.sync({ force: config.get('database.force') }).then(() => {
  console.log("Database & Tables created");
});

module.exports = {
  User,
  Schema,
  SchemaField
};
