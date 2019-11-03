import { addNewPost, getPosts, getLatestPosts, getPostWithId, updatePost, deletePost, getThemes } from '../controllers/postController';

/** Injecting app object, because we're going to use routes function in order to pass the endpoints created here. */
const routes = (app) => {
    app.route('/posts')
        .get((req, res, next) => {
            console.log(`Request from: ${req.originalUrl} | type: ${req.method}`);
            next();
        }, getPosts)
        .post(addNewPost);
        
    app.route('/latestPosts/:skip/:limit')
        .get((req, res, next) => {
            console.log(`Request from: ${req.originalUrl} |  type: ${req.method}`);
            next();
        }, getLatestPosts)
        
    app.route('/themes')
        .get((req, res, next) => {
            console.log(`Request from: ${req.originalUrl} |  type: ${req.method}`);
            next();
        }, getThemes)
    
    app.route('/posts/:postId')
        .get((req, res, next) => {
            console.log(`Request from: ${req.originalUrl} |  type: ${req.method}`);
            next(); // without next, GET url can only be 'posts?postId=xyz', but this way we can call it as 'posts/xyz'
        }, getPostWithId) // get specific post
        .put(updatePost) // put request
        .delete(deletePost);
}

export default routes; // es6 syntax. no way to use it without export.