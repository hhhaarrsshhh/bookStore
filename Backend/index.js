import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose';
const app = express()
dotenv.config();

const PORT = process.env.PORT || 3000;
const Url=process.env.MongoDbUrl

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

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})
;