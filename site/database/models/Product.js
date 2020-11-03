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
            type: dataTypes.STRING(300),
            allowNull:false
        },
        imagen:{
            type: dataTypes.STRING(100),
            allowNull:false
        }
    }
    let config={
        tableName: "products",
        timestamps : true,
        underscored: true
    }


    const Product = sequelize.define(alias, cols, config)
    return Product;
}