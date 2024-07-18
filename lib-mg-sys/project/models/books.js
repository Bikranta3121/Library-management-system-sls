const mongoose=require('mongoose');
//const validator=require('validator');

const bookSchema=new mongoose.Schema({
    bookName:
    {
        type:String,
    },
    authorName:
    {
        type:String,
    },
    year:
    {
        type:Number,
    },
    issue:
    {
        type:Boolean,
    }
})


module.exports=mongoose.model('Books',bookSchema);