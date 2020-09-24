module.exports = (sequelize, DataTypes) => {
  const Breserve = sequelize.define('breserve', {
    idx: {
      field: 'idx',
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    dogIdx: {
      field: 'dog_idx',
      type: DataTypes.STRING,
      allowNull: false,
    },
    bhospitalIdx: {
      field: 'bhospital_idx',
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    bloodType: {
      field: 'blood_type',
      type: DataTypes.STRING,
      allowNull: false,
    }, 
    time: {
      field: 'time',
      type: DataTypes.STRING,
      allowNull: false,
    },
    date: {
      field: 'date',
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    tableName: 'breserve',
    timestamps: false,
  });

  return Breserve;
}