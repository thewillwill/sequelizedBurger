
module.exports = function(sequelize, DataTypes) {

    var Burger = sequelize.define("Burger", {
        Burger_name: {
            allowNull: false,
            type: DataTypes.STRING,
            validate: { len: [1, 160] }
        },
        ingredients: {
            allowNull: false,
            type: DataTypes.STRING,
            validate: { len: [0, 160] }
        },
        devoured: {
          type: DataTypes.BOOLEAN,
          defaultValue: false,
          allowNull: false,
        }

    });

    return Burger;
};