import exprees from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDb from './config/db.js'
import router from './route/userRoute.js'
import chatRouter from './route/chatRoute.js'

const app = exprees()
app.use(cors())
app.use(exprees.json())
app.use(exprees.urlencoded({extended:true}))
app.use(router)
app.use(chatRouter)
const PORT = process.env.PORT
app.get('/',(req,res)=>{
    res.send("Backend run successfully")
})

connectDb().then(()=>{
    app.listen(PORT,()=>{
        console.log(`App is running on port localhost://${PORT}`)
    })
})
