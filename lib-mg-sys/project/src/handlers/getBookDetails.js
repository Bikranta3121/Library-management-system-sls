
const connectDb=require('../../db/db');
const books=require('../../models/books');
module.exports.handler=async (event,context)=>{
    context.callbackWaitsForEmptyEventLoop=false; 
    try {
        await connectDb();
        const {bookName}=event.pathParameters;
        bookObj=await books.findOne({bookName});
        return{
            statusCode:200,
            body:JSON.stringify(bookObj),
        }
    } catch (error) {
        console.error(error);
        return{
            statusCode: error.statusCode || 404,
            body:JSON.stringify({error:error.message}),
        }
    }
};