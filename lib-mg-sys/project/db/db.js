const mongoose=require('mongoose');

let conn=null;
module.exports = coneectDb=async()=>{
    if(conn==null){
        conn=await mongoose.connect(process.env.DB,{
            serverSelectionTimeoutMS:7000,
        });
        console.log("connect establish the first time");
        return conn;
    }
    console.log("connection already established");
}
    