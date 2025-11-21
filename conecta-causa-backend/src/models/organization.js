module.exports = (sequelize, DataTypes) => {
  const Organization = sequelize.define('Organization', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    contactEmail: DataTypes.STRING,
    location: DataTypes.JSON
  }, {});
  Organization.associate = function(models) {
    Organization.hasMany(models.Opportunity, { foreignKey: 'organizationId' });
  };
  return Organization;
};
