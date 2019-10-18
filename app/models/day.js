module.exports = function (sequelize, DataTypes) {
  var Day = sequelize.define("Day", {
    name: DataTypes.STRING
  }, {
    timestamps: false
  });

  Day.associate = function (models) {
    Day.belongsToMany(models.Volunteer, { through: "VolunteerDay" })
  }

  return Day;
}