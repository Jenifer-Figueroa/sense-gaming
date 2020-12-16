
module.exports= (sequelize,dataTypes)=>{

    let alias= "Users";

    let cols = {
        id:{
            type:dataTypes.INTEGER,
            allowNull:false,
            primaryKey: true,
            autoIncrement: true
        },
        nombre:{
            type: dataTypes.STRING(45),
            allowNull:false
        },
        apellido:{
            type: dataTypes.STRING(45),
            allowNull:false
        },
        email:{
            type: dataTypes.STRING(100),
            allowNull:false
        },
        password:{
            type: dataTypes.STRING(100),
            allowNull:false
        },
        avatar:{
            type: dataTypes.STRING(45),
            allowNull:false
        },
        rol:{
            type: dataTypes.STRING(100),
            allowNull:false
        },
        direccion:{
            type: dataTypes.STRING(100)
        },
        localidad:{
            type: dataTypes.STRING(45)
        },
        provincia:{
            type: dataTypes.STRING(45)
        }


    }

    let config={
        tableName: "users",
        timestamps: true,
        underscored: true
    }



    const User = sequelize.define(alias, cols, config)

    User.associate = function(models){
        User.belongsToMany(models.Users,{
            as : "productos",
            through : 'cart', //tabla intermedia 
            foreignKey : 'id_user', //la clave foranea de este modelo en esa tabla intermedia
            otherKey : 'id_producto'
        })
    }

    return User;
}