import mongoose from 'mongoose';

let isConnected = false; //this checks if mongoose is connected

export const connectToDB = async () => {
    mongoose.set('strictQuery', true); // prevent unknown field queries

    if(!process.env.MONGODB_URL) return console.log('MONGODB_URL not found');
    if(isConnected) return console.log('Already connected to MongoDB');

    try {

    } catch(error) {
        
    }

}
