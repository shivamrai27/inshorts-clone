import mongoose from 'mongoose';
const Connection = async () => {
    const URL = `mongodb://shivam:admin@ac-wr5c7jh-shard-00-00.xqnu1cw.mongodb.net:27017,ac-wr5c7jh-shard-00-01.xqnu1cw.mongodb.net:27017,ac-wr5c7jh-shard-00-02.xqnu1cw.mongodb.net:27017/?ssl=true&replicaSet=atlas-kc2qq8-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useNewUrlParser: true });
        console.log("Wow!! Database is connected is succesfully");
    } catch (error) {

        console.log("error while fetching database ", error);
    }
}
export default Connection;