import { MongoClient } from "mongodb";
const url = 'mongodb+srv://kuemwhang:1q1q-www3@kuemwhang.tbopdvx.mongodb.net/?retryWrites=true&w=majority&appName=kuemwhang';
const options = {useNewUrlParser:true};
let connectDB;

if (process.env.NODE_ENV === 'development') {
    if (!global._mongo) {
        global._mongo = new MongoClient(url, options).connect();
    }
    connectDB = global._mongo;
} else {
    connectDB = new MongoClient(url, options).connect();
}
export {connectDB}