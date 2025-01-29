import mongoose from 'mongoose';

const mongoURI = process.env.MONGODB_URI;

const connectToDB = () => {
    mongoose.connect(mongoURI)
        .then(() => console.log('MongoDB Connected'))
        .catch(e => console.error(e, 'test'));
}

export default connectToDB;