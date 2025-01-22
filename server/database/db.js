import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONOGO_URI)
           
        console.log('MongoDB Connected')
        
        // console.log('MongoDB Connected');
        
    } catch (error) {
        console.log("error occured", error); 
    }
}
export default connectDB;