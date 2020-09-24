module.exports = (sequelize, DataTypes) => {
  const Dog = sequelize.define('dog', {
    idx: {
      field: 'idx',
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    userId: {
      field: 'user_id',
      type: DataTypes.STRING,
      allowNull: false,
    },
    dogName: {
      field: 'dog_name',
      type: DataTypes.STRING,
      allowNull: false,
    },
    breed: {
      field: 'breed',
      type: DataTypes.TEXT,
      allowNull: false,
    },
    weight: {
      field: 'weight',
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    bloodType: {
      field: 'blood_type',
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    tableName: 'dog',
    timestamps: false,
  });

  return Dog;
}