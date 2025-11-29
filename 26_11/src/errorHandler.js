import {Prisma} from './prisma.js';

export const notFoundHandler = (req, res, next) => {
    console.log('Not Found');
    res.status(404).json({ error: "Route not found" });

};

export const errorHandler = (err, req, res, next) => {
    console.log("Error handler");
    console.error(err);

    let status = 500;
    let errorMessage = 'Internal server error';

    if (err instanceof Prisma.PrismaClientKnownRequestError && err.code === 'P2025') {
        status = 404;
        errorMessage = 'Record not found';
    }

    if (err instanceof Prisma.PrismaClientValidationError) {
        status = 400;
        errorMessage = err.message;
    }

    if (err instanceof Prisma.PrismaClientKnownRequestError && err.code === 'P2002') {
        status = 409;
        errorMessage = 'Unique constraint failed';
    }

    if (err.status && err.message) {
        status = err.status;
        errorMessage = err.message;
    }

    res.locals.errorStatus = status;
    res.locals.errorMessage = errorMessage;

    res.status(status).json({ error: errorMessage });

    next(err);
};