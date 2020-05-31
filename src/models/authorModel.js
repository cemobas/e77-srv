import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const AuthorSchema = new Schema({
    nickname: {
        type: String,
        required: 'Enter a nickname for the author'
    },
    name: {
        type: String,
        required: 'Enter name'
    },
    surname: {
        type: String,
        required: 'Enter surname'
    },
    shortBio: {
        type: String,
        required: 'Enter a short biography'
    },
    twitter: {
        type: String,
        required: 'Enter twitter link'
    },
    facebook: {
        type: String,
        required: 'Enter facebook link'
    },
    instagram: {
        type: String,
        required: 'Enter instagram link'
    }
});
