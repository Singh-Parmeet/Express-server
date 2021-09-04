export default (req, res, next) => {

     // next function execute the middleware
    next({ status: 400, error: 'Not Found', message: 'Invalid route called'});
};