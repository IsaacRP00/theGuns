module.exports = (sequelize, Sequelize) => {
    const Gun = sequelize.define("gun", {
        type: {
            type: Sequelize.STRING
        },
        name: {
            type: Sequelize.STRING
        },
        country: {
            type: Sequelize.STRING
        },
        caliber: {
            type: Sequelize.STRING
        },

    },
    {timestamps: false});

    return Gun;
}