import mongoose from 'mongoose';

let isConnected = false; // variable to check if mongoose is connected

export const copnnectToDB =  async () => {
    mongoose.set('strictQuery', true);

    if(!process.env.MONGODB_URL) return console.log('MONGO_URL not found');
    if(isConnected) return console.log('ALready connected to MongoDB');

    try {
        await mongoose.connect(process.env.MONGODB_URL);
        isConnected = true;
    } catch (error) {
        console.log(error);
    }
}