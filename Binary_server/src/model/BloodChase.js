module.exports = (sequelize, DataTypes) => {
  const BloodChase = sequelize.define('blood_chase', {
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
    dogIdx: {
      field: 'dog_idx',
      type: DataTypes.INTEGER,
      allowNull: false,
   }, 
   bhosName: {
      field: 'bhos_name',
      type: DataTypes.STRING,
      allowNull: false,
   }, 
   dogName1: {
      field: 'dog_name1',
      type: DataTypes.STRING,
      allowNull: true,
   }, 
   dogName2: {
      field: 'dog_name2',
      type: DataTypes.STRING,
      allowNull: true,
   }, 
   dogName3: {
      field: 'dog_name3',
      type: DataTypes.STRING,
      allowNull: true,
   }, 
   date: {
      field: 'date',
      type: DataTypes.DATETIME,
      allowNull: false,
   }, 
  }, {
    tableName: 'blood_chase',
    timestamps: false,
  });

  return BloodChase;
}