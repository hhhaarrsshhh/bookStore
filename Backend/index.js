import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import bookRoute from './routes/book_route.js'
import cors from 'cors'
import userRoute from './routes/user_routes.js'

dotenv.config();
const app = express()


const PORT = process.env.PORT || 3000;
const Url=process.env.MongoDbUrl
// 🔥 Enable CORS for all requests
app.use(cors())
app.use(express.json())


app.get('/', (req, res) => {
  res.send('Hello World!')
})

// connect to database
try{
  mongoose.connect(Url,{
    useNewUrlParser:true,
    useUnifiedTopology:true
  });
  console.log("connected to database")

}
catch(err){
  console.log("error",err)
}

//defining routes
app.use("/book",bookRoute)
app.use("/user",userRoute)


app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})
;