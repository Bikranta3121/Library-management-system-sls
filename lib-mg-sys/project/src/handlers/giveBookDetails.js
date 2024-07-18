
const connectDb=require('../../db/db');
const books=require('../../models/books');
module.exports.handler=async (event,context)=>{
    context.callbackWaitsForEmptyEventLoop=false; 
    try {
        await connectDb();
        const {bookName,authorName,year,issue}=JSON.parse(event.body);
        let bookObj={bookName,authorName,year,issue};
        bookObj=await books.create(bookObj);
        return{
            statusCode:201,
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