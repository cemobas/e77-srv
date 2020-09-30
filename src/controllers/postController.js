import mongoose from 'mongoose';
import { AuthorSchema } from '../models/authorModel';
import { PostSchema } from '../models/postModel';

const Author = mongoose.model('Author', AuthorSchema);
const Post = mongoose.model('Post', PostSchema);

export const addNewPost = (req, res) => {
    let newPost = new Post(req.body);

    newPost.save((err, contact) => {
        if (err) {
            res.send(err);
        }
        res.json(contact);
    });
};

export const getPosts = (req, res) => {
    Post.find({}, (err, posts) => {
        if (err) {
            res.send(err);
        }
        res.json(posts);
    });
};

export const getLatestPosts = (req, res) => {
    Post.find({}, [], { skip: parseInt(req.params.skip), limit: parseInt(req.params.limit), sort: { date: -1 } }, (err, posts) => {
        if (err) {
            res.send(err);
        }
        res.json(posts);
    });
};

export const getLatestPostsByCategory = (req, res) => {
        Post.find({'category': req.params.category}, [], { skip: parseInt(req.params.skip), limit: parseInt(req.params.limit), sort: { date: -1 } }, (err, posts) => {
            if (err) {
                res.send(err);
            }
            res.json(posts);
        });
};

export const getCategories = (req, res) => {
    Post.aggregate([
        {
            $group: {
                _id: '$category',
            }
        }
    ], function (err, result) {
        if (err) {
            next(err);
        } else {
            res.json(result);
        }
    });
};

export const getPostWithId = (req, res) => {
    Post.findOne({ index: req.params.postId }, (err, post) => {
        if (err) {
            res.send(err);
        }
        res.json(post);
    });
}

export const updatePost = (req, res) => {
    /** "new: true" means you want the new (updated) data in the response (not the old data) */
    Post.findOneAndUpdate({ index: req.params.postId }, req.body, { new: true }, (err, post) => {
        if (err) {
            res.send(err);
        }
        res.json(post);
    })
}

export const deletePost = (req, res) => {
    Post.remove({ index: req.params.postId }, (err, post) => {
        if (err) {
            res.send(err);
        }
        res.json({ message: 'Successfully deleted post' });
    })
}

export const getAuthorWithId = (req, res) => {
    Author.findOne({ nickname: req.params.nickname }, (err, author) => {
        if (err) {
            res.send(err);
        }
        res.json(author);
    });
}
