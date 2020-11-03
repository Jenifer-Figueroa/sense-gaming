
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
    return User;
}