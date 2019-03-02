module.exports = (sequelize, type) => {
  return sequelize.define("schema_field", {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: type.STRING
  });
};
