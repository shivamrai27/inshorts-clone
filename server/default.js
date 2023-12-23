import { data } from './constant/data.js';
import News from './model/news-schema.js';

const DeafaultData = async () => {
    try {
        //await News.deleteMany({});
        await News.insertMany(data);
        console.log('Data imported successfully');
    } catch (error) {
        console.log("Error ", error.message);
    }
}
export default DeafaultData;