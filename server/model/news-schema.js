import mongoose from 'mongoose';

const newsSchema = mongoose.Schema({
    title: {
        type: 'string',
        required: true
    },
    author: {
        type: 'string',
        required: true
    },
    description: {
        type: 'string',
        required: true
    },
    url: {
        type: 'string',
        required: true,
        unique: true
    },
    timestamp: {
        type: 'string',
        required: true
    },
    link: {
        type: 'string',
        required: true
    },
    publisher: {
        type: 'string',
        required: true
    }
});

const news = mongoose.model('news', newsSchema);
export default news;