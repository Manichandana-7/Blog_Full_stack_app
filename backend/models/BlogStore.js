const mongoose=require('mongoose');
const blogSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    desc:{
        type:String,
        required:true
    },
    imgurl:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    createdDate:{
        type:Date,
        default:Date.now
    }
})
module.exports=mongoose.model('BlogStore',blogSchema);