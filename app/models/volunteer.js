module.exports = function (sequelize, DataTypes) {
    var Volunteer = sequelize.define("Volunteer", {
        ministry: DataTypes.STRING,
        name: DataTypes.STRING,
        // phone: INTEGER,
        email: {
            type: DataTypes.STRING,
            validate: {
                isEmail: true
            }
        },
        note: DataTypes.TEXT
    }, 
    {
        timestamps: false
    });

    Volunteer.associate = function (models) {
        Volunteer.belongsToMany(models.Day, { through: "VolunteerDay" })
    }

    return Volunteer;
}
        
        

        
        
        