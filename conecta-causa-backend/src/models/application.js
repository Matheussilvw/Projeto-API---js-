module.exports = (sequelize, DataTypes) => {
  const Application = sequelize.define('Application', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    userId: DataTypes.INTEGER,
    opportunityId: DataTypes.INTEGER,
    status: { type: DataTypes.ENUM('pending','accepted','rejected'), defaultValue: 'pending' }
  }, {});
  Application.associate = function(models) {
    Application.belongsTo(models.User, { foreignKey: 'userId' });
    Application.belongsTo(models.Opportunity, { foreignKey: 'opportunityId' });
  };
  return Application;
};
