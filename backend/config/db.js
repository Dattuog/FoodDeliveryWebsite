import mongoose from "mongoose";


export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://Dattu_og:Deekshith2003@cluster0.jaeok76.mongodb.net/FoodDeliveryWebsite').then(()=>console.log("DB Connected"));
}