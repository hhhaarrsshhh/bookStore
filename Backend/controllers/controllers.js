import Book from'../modal/book.modal.js'

export const getBook=(req,res)=>{
    try{
        const book =Book.find()
        res.status(200).json(book)
    }
    
    catch(err){

    }
}