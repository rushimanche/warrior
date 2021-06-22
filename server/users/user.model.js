const { DataTypes } = require('sequelize');

module.exports = model;

function model(sequelize) {
    const attributes = {
        firstName: { type: DataTypes.TEXT, allowNull: false },
        lastName: { type: DataTypes.TEXT, allowNull: false },
        username: { type: DataTypes.TEXT, allowNull: false },
        hash: { type: DataTypes.TEXT, allowNull: false },
        ca_activity_1: { type: DataTypes.TEXT, allowNull: true },
        ca_activity_1_desc: { type: DataTypes.TEXT, allowNull: true }, 
        ca_activity_2: { type: DataTypes.TEXT, allowNull: true },
        ca_activity_2_desc: { type: DataTypes.TEXT, allowNull: true }, 
        ca_activity_3: { type: DataTypes.TEXT, allowNull: true },
        ca_activity_3_desc: { type: DataTypes.TEXT, allowNull: true }, 
        ca_activity_4: { type: DataTypes.TEXT, allowNull: true },
        ca_activity_4_desc: { type: DataTypes.TEXT, allowNull: true }, 
        ca_activity_5: { type: DataTypes.TEXT, allowNull: true },
        ca_activity_5_desc: { type: DataTypes.TEXT, allowNull: true }, 
        ca_activity_6: { type: DataTypes.TEXT, allowNull: true },
        ca_activity_6_desc: { type: DataTypes.TEXT, allowNull: true }, 
        ca_activity_7: { type: DataTypes.TEXT, allowNull: true },
        ca_activity_7_desc: { type: DataTypes.TEXT, allowNull: true }, 
        ca_activity_8: { type: DataTypes.TEXT, allowNull: true },
        ca_activity_8_desc: { type: DataTypes.TEXT, allowNull: true }, 
        ca_activity_9: { type: DataTypes.TEXT, allowNull: true },
        ca_activity_9_desc: { type: DataTypes.TEXT, allowNull: true }, 
        ca_activity_10: { type: DataTypes.TEXT, allowNull: true },
        ca_activity_10_desc: { type: DataTypes.TEXT, allowNull: true }, 
        ca_award_1: { type: DataTypes.TEXT, allowNull: true },
        ca_award_1_desc: { type: DataTypes.TEXT, allowNull: true },
        ca_award_2: { type: DataTypes.TEXT, allowNull: true },
        ca_award_2_desc: { type: DataTypes.TEXT, allowNull: true },
        ca_award_3: { type: DataTypes.TEXT, allowNull: true },
        ca_award_3_desc: { type: DataTypes.TEXT, allowNull: true },
        ca_award_4: { type: DataTypes.TEXT, allowNull: true },
        ca_award_4_desc: { type: DataTypes.TEXT, allowNull: true },
        ca_award_5: { type: DataTypes.TEXT, allowNull: true },
        ca_award_5_desc: { type: DataTypes.TEXT, allowNull: true }
    };

    const options = {
        defaultScope: {
            // exclude hash by default
            attributes: { exclude: ['hash'] }
        },
        scopes: {
            // include hash with this scope
            withHash: { attributes: {}, }
        }
    };

    return sequelize.define('User', attributes, options);
}