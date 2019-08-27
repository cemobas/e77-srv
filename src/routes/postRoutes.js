import { addNewPost, getPosts, getLatestPosts, getPostWithId, updatePost, deletePost } from '../controllers/postController';

/** Injecting app object, because we're going to use routes function in order to pass the endpoints created here. */
const routes = (app) => {
    app.route('/posts')
        .get((req, res, next) => {
            console.log(`Request from: ${req.originalUrl}`);
            console.log(`Request type: ${req.method}`);
            next();
        }, getPosts)
        .post(addNewPost);
        
    app.route('/latestPosts/:skip/:limit')
        .get((req, res, next) => {
            console.log(`Request from: ${req.originalUrl}`);
            console.log(`Request type: ${req.method}`);
            next();
        }, getLatestPosts)
    
    app.route('/posts/:postId')
        .get(getPostWithId) // get specific post
        .put(updatePost) // put request
        .delete(deletePost);
}

export default routes; // es6 syntax. no way to use it without export.