const express = require('express')
const app = express()
const userRouter = require('./routes/user.routes')



app.get('/', (req, res)=>{
    res.send('Hello world from backend')
})


app.use('/api/user',userRouter)



module.exports = app