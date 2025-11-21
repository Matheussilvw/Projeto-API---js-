module.exports = (sequelize, DataTypes) => {
  const Opportunity = sequelize.define('Opportunity', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    skills: DataTypes.JSON,
    location: DataTypes.JSON,
    schedule: DataTypes.JSON,
    organizationId: DataTypes.INTEGER
  }, {});
  Opportunity.associate = function(models) {
    Opportunity.belongsTo(models.Organization, { foreignKey: 'organizationId' });
    Opportunity.hasMany(models.Application, { foreignKey: 'opportunityId' });
  };
  return Opportunity;
};
