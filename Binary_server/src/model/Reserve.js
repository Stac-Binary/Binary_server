module.exports = (sequelize, DataTypes) => {
  const Reserve = sequelize.define('reserve', {
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
    hospitalIdx: {
      field: 'hospital_idx',
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    service: {
      field: 'service',
      type: DataTypes.STRING,
      allowNull: false,
    },
    day: {
      field: 'day',
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    tableName: 'reserve',
    timestamps: false,
  });

  return Reserve;
}