import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useFindAndModify: true,
    });

    console.log(`MongoDB CONNECTED: ${connection.connection.host}`);
  } catch (error) {
    console.log(`Error ${error.message}`);
    process.exit(1); // => it means exit with failure if error
  }
};

export default connectDB;
