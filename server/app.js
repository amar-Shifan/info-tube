const express = require("express")
const app = express();

// env configuration
const env = require('dotenv')
env.config()

// mongoose connection
// const connect = require('./config/connection'); 


// connect()
// .then((res)=>{
//     console.log("mongodb connected ")
// })
// .catch(err=> console.log(err, "errord"))



const adminRouter = require("./routes/adminRouter")
const userRouter = require('./routes/userRouter') 

app.use('/api/user', userRouter)
app.use('/api/admin', adminRouter)

app.listen(process.env.PORT,()=>{
    console.log('working')
})