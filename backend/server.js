// mongoose - helps to connect with the database
// jsonwebtoken - creating the authentication system
// bcrypt - encrypt the users data and store it in the database
// cors - permission to connect frontend with the backend
// dotenv - we can use environment variable
// body-parser - parse the data coming through the user
// multer - create the image store system
// stripe - Adding payment Gateways in project
// validator - check if password and email id valid or not
// nodemon - when we save the project the server will be restarted


import express from "express";
import cors from "cors"
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";




// app config
const app = express() 
const port = 4000

// middleware

app.use(express.json())
app.use(cors())

// db connection
connectDB() ;


// api endpoints
app.use("/api/food",foodRouter)
app.use("/images",express.static('uploads'))


app.get("/",(req,res)=>{
res.send("API WORKING")
})


app.listen(port,()=>{
    console.log(`Server started on http://localhost:${port}`)
})


// mongodb+srv://Dattu_og:Deekshith2003@cluster0.jaeok76.mongodb.net/?


