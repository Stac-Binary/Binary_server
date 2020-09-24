module.exports = (sequelize, DataTypes) => {
  const Hospital = sequelize.define('hospital', {
    idx: {
      field: 'idx',
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    hospitalName: {
      field: 'hospital_name',
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      field: 'address',
      type: DataTypes.STRING,
      allowNull: false,
   }, 
  }, {
    tableName: 'hospital',
    timestamps: false,
  });

  return Hospital;
}