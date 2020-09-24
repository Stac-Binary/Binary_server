module.exports = (sequelize, DataTypes) => {
  const Breserve = sequelize.define('breserve', {
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
    wantTime: {
      field: 'want_time',
      type: DataTypes.STRING,
      allowNull: false,
    },
    wantDay: {
      field: 'want_day',
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    tableName: 'breserve',
    timestamps: false,
  });

  return Breserve;
}