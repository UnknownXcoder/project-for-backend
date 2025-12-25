import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


const connectDB = async () =>{ //using async so that connection to database can be done faster and cant depend on the location of database
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`DB connected db host : ${connectionInstance.connection.host}`)
    } catch (error) {
        console.log("connection is failed with database", error)
        process.exit(1)
    }
}

export default connectDB