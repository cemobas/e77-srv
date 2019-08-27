import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const PostSchema = new Schema({
    author: {
        type: String,
        required: 'Enter the author of the post'
    },
    content: {
        type: String,
        required: 'Enter the content'
    },
    tags: {
        type: Array
    },
    short: {
        type: String,
        required: 'Enter the short explanation'
    },
    illustration: {
        type: String,
        required: 'Enter the image path of the post'
    },
    date: {
        type: Date,
        required: 'Enter when it is posted'
    }
});
