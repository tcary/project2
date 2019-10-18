module.exports = function (sequelize, DataTypes) {
    var Volunteer = sequelize.define("Volunteer", {
        name: DataTypes.STRING,
        email: {
            type: DataTypes.STRING,
            validate: {
                isEmail: true
            }
        }
    }, {
        timestamps: false
    });

    Volunteer.associate = function (models) {
        Volunteer.belongsToMany(models.Day, { through: "VolunteerDay" })
    }

    return Volunteer;
}