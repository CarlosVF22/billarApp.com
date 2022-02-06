const {Model, DataTypes, Sequelize} = require('sequelize');

const PRODUCT_TABLE = "products";

const ProductsSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    name: {
        allowNull: false,
        type: DataTypes.STRING
    },
    salePrice: {
        allowNull: false,
        type: DataTypes.INTEGER
    },
    stock: {
        allowNull: false,
        type: DataTypes.INTEGER
    },
    createAt: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: Sequelize.NOW
    }
}

class Products extends Model {
    static associate(models) {
     //
    }

    static config(sequelize) {
        return {
            sequelize,
            tableName: PRODUCT_TABLE,
            modelName: 'Products',
            timeStamps: false
        }
    }
}

module.exports = {PRODUCT_TABLE, ProductsSchema, Products};