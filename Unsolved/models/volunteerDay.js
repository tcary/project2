module.exports = function (sequelize, DataTypes) {
var VolunteerDay = sequelize.define("VolunteerDay", { 
      name: DataTypes.STRING
    // }, {
    //   timestamps: false
    // }, {
    //     name: DataTypes.STRING,
    //     email: {
    //         type: DataTypes.STRING,
    //         validate: {
    //             isEmail: true
    //         }
    //     }
    });
  
    VolunteerDay.associate = function (models) {
    Volunteer.belongsToMany(models.Day, { through: "VolunteerDay" })
    Day.belongsToMany(models.Volunteer, { through: "VolunteerDay" })
    }
  
    return VolunteerDay;
  }