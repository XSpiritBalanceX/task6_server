const sequelize=require('./db');
const {DataTypes}=require('sequelize');

const MyMail=sequelize.define('myMail',{
    id:{type:DataTypes.INTEGER, autoIncrement:true, primaryKey:true},
    nameSender:{type:DataTypes.STRING},
    nameReceivers:{type:DataTypes.STRING},
    topic:{type:DataTypes.STRING},
    message:{type:DataTypes.STRING}
});

module.exports={MyMail};