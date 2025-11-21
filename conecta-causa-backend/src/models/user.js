module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: DataTypes.STRING,
    email: { type: DataTypes.STRING, unique: true },
    password: DataTypes.STRING,
    role: DataTypes.ENUM('volunteer','organization'),
    skills: DataTypes.JSON, // array of tags
    location: DataTypes.JSON, // {lat, lng}
    availability: DataTypes.JSON // simple availability representation
  }, {});
  User.associate = function(models) {
    User.hasMany(models.Application, { foreignKey: 'userId' });
  };
  return User;
};
