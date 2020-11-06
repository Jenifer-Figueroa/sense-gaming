

module.exports= (sequelize,dataTypes)=>{

    let alias= "Products"

    let cols={
        id:{
            type:dataTypes.INTEGER,
            allowNull:false,
            primaryKey: true,
            autoIncrement: true
        },
        nombre:{
            type: dataTypes.STRING(100),
            allowNull:false
        },
        precio:{
            type: dataTypes.INTEGER.UNSIGNED,
            allowNull:false,
        },
        descripcion:{
            type: dataTypes.STRING(400),
            allowNull:false
        },
        imagen:{
            type: dataTypes.STRING(100),
            allowNull:false
        },
        id_categoria:{
            type: dataTypes.INTEGER
        }
    }
    let config={
        tableName: "products",
        timestamps : true,
        underscored: true
    }


    const Product = sequelize.define(alias, cols, config)

    Product.associate = function(models){
        Product.belongsTo(models.Categories,{
            as : "categoria",
            foreignKey : "id_categoria"
        })
    }
    return Product;
}