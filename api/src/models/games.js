const {DataTypes} = require('sequelize');

module.exports = (sequelize) =>{
    sequelize.define(
        "game",
        {
            id:{
                type: DataTypes.INTEGER,
                allowNull: false,
                autoIncrement:true,
                primaryKey:true,
            },
            winner:{
                type: DataTypes.STRING,
                allowNull:false,
                allowEmpty: false,
            },
            loser:{
                type: DataTypes.STRING,
                allowNull:false,
                allowEmpty: false,
            },
            date:{
                type: DataTypes.STRING,
                allowNull: false,
                allowEmpty: false,
            },
        },
        {
            timestamps: false,
        }
    );
}; 