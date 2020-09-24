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
    adress: {
      field: 'adress',
      type: DataTypes.STRING,
      allowNull: false,
   }, 
   adress: {
      field: 'adress',
      type: DataTypes.STRING,
      allowNull: false,
   }, 
   call: {
      field: 'call',
      type: DataTypes.INTEGER,
      allowNull: false,
   }, 
   bloodType: {
      field: 'blood_type',
      type: DataTypes.FLOAT,
      allowNull: false,
   }, 
  }, {
    tableName: 'hospital',
    timestamps: false,
  });

  return Hospital;
}