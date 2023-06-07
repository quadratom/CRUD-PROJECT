const mongoose = require('mongoose');

mongoose.set('strictQuery', true);
const connectDB = async () => {
    try{
        // mongodb connection string
        let commString= process.env.MONGO_URI
        console.log(commString);
        const con =await mongoose.connect(process.env.MONGO_URI,{
            // useNwwUriParser: true,
            useUnifiedTopology: true,
            // useFindAndModify: false,
            // UseCreateIndex: true
        })

        console.log(`MongoDB connected : ${con.connection.host}`);
    }catch(err){
        console.log(err);
        process.exit(1);
    }
}

module.exports = connectDB






