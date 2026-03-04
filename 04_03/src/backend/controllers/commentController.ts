import {prisma} from '../prisma.ts'
import type {Request, Response, NextFunction} from 'express';

export const getComments = async (res : Response, next : NextFunction) => {
    try {
        const comments = await prisma.comment.findMany();
        res.status(200).json(comments);
    } catch (error) {
        next(error);
    }
}

export const createComment = async (req : Request, res : Response, next : NextFunction) => {
    try {
        const { content, author, postId } = req.body;

        const comment = await prisma.comment.create({
            data: { content, author, postId }
        })
        res.status(201).json(comment);
    } catch (error) {
        next(error);
    }
}