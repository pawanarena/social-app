const mongoose=require('mongoose');
const Schema = mongoose.Schema;

//create schema
const UserSchema=new Schema({
    name:{
        type:String,
        requireq:true
    },
    email:{
        type:String,
        requireq:true
    },
    password:{
        type:String,
        requireq:true
    },
    avatar:{
        type:String
    },
    date:{
        type:Date,
        default:Date.now
    },
});

module.exports=User=mongoose.model('users',UserSchema);