const errorHandler = (err, req, res, next ) => {
    if (res.headersSent) {
        console.log('Im here');
        return next(err);
    }

     const { message, status, error } = err;
     const erroResponse = {
        error: error || 'undefined',
        message: message || 'error',
        status: status || '500',
        timestamp: new Date(),
    };


    res.status(erroResponse.status).json(erroResponse);
};

export default errorHandler;
