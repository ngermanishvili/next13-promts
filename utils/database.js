import mongoose from 'mongoose';

let isConnected = false; // track if db is connected

export const connectToDb = async () => {
    mongoose.set('strickQuery', true);

    if (isConnected) {
        console.log('MongoDB is already connected');
        return;
    }

   try {
    
   }
    
}