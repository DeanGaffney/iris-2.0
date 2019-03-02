module.exports = (sequelize, type) => {
  return sequelize.define("schema", {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: type.STRING
  });
};