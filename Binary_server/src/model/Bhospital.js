module.exports = (sequelize, DataTypes) => {
  const Bhospital = sequelize.define('bhospital', {
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
   call: {
      field: 'call',
      type: DataTypes.INTEGER,
      allowNull: false,
   }, 
   bloodType: {
      field: 'blood_type',
      type: DataTypes.STRING,
      allowNull: false,
   }, 
  }, {
    tableName: 'bhospital',
    timestamps: false,
  });

  return Bhospital;
}