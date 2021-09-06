const notFoundRoute = (req, res, next) => {

    next({ status: 400, error: 'Not Found', message: 'Invalid route called'});
};

export default notFoundRoute;