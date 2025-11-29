import prisma from '../prisma.js';

export const getComments = async (req, res, next) => {
    try {
        const comments = await prisma.comment.findMany();
        res.status(200).json(comments);
    } catch (error) {
        next(error);
    }
}

export const getOneComment = async (req, res, next) => {
    try {
        const id = req.params.id;
        const comment = await prisma.comment.findUnique({
            where: {id: Number(id)},
        })

        if (comment==null) {
            res.status(404).json('Comment not found');
        }
        else {
            res.status(200).json(comment);
        }
    } catch (error) {
        next(error);
    }
}

export const createComment = async (req, res, next) => {
    try {
        const { content, author, postId } = req.body;

        if (!content || !author || !postId) {
            return res.status(400).json({
                error: 'Missing required fields'
            })
        }
        const comment = await prisma.comment.create({
            data: { content, author, postId }
        })
        res.status(201).json(comment);
    } catch (error) {
        next(error);
    }
}

export const updateCommentPut = async (req, res, next) => {
    try {
        const id = req.params.id;
        const commentContent = req.body;
        const comment = await prisma.comment.update({
            where: {id: Number(id)},
            data: commentContent
        })
        res.status(200).json(comment);
    } catch (error) {
        next(error);
    }
}

export const updateCommentPatch = async (req, res, next) => {
    try {
        const id = req.params.id;
        const commentContent = req.body;
        const comment = await prisma.comment.update({
            where: {id: Number(id)},
            data: commentContent
        })
        res.status(200).json(comment);
    } catch (error) {
        next(error);
    }
}

export const deleteComment = async (req, res, next) => {
    try {
        const id = req.params.id;
        const comment = await prisma.comment.delete({
            where: {id: Number(id)},
        })
        res.status(200).json(comment);
    } catch (error) {
        next(error);
    }
}