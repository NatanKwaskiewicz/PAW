export const notFoundHandler = (req, res, next) => {
    res.status(404).json({ error: "Route not found" || " "});
};

export const errorHandler = (err, req, res, next) => {
    console.error(err);

    let status = 500;
    let errorMessage = 'Internal server error';

    if (err.status && err.message) {
        status = err.status;
        errorMessage = err.message;
    }

    res.locals.errorStatus = status;
    res.locals.errorMessage = errorMessage;

    res.status(status).json({ error: errorMessage });

    next(err);
};