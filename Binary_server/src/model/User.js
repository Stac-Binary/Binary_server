module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    id: {
      field: 'id',
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    pw: {
      field: 'pw',
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      field: 'name',
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      field: 'address',
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, {
    tableName: 'user',
    timestamps: false,
  });

  return User;
}