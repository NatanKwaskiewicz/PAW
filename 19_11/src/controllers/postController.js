import prisma from '../prisma.js';

export const getPosts = async (req, res) => {
    try {
        const posts = await prisma.post.findMany();
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json(error);
    }
}

export const getOnePost = async (req, res) => {
    try {
        const id = req.params.id;
        const post = await prisma.post.findUnique({
            where: {id: Number(id)}
        });

        if (post==null) {
            res.status(404).json('Post not found');
        }
        else {
            res.status(200).json(post);
        }

    } catch (error) {
        res.status(500).json(error);
    }
}

export const createPost = async (req, res) => {
    try {
        const postContent = req.body;
        const post = await prisma.post.create({
            data: postContent
        })
        res.status(201).json(post);
    } catch (error) {
        res.status(500).json(error);
    }
}

export const updatePostPut = async (req, res) => {
    try {
        const id = req.params.id;
        const postsContent = req.body;

        const post = await prisma.post.update({
            where: {id: Number(id)},
            data: postsContent
        })
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json(error);
    }
}

export const updatePostPatch = async (req, res) => {
    try {
        const id = req.params.id;
        const postContent = req.body;

        const post = await prisma.post.update({
            where: {id: Number(id)},
            data: postContent
        })
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json(error);
    }
}

export const deletePost = async (req, res) => {
    try {
        const id = req.params.id;

        //deleting any comments which have this post as a foreign key
        await prisma.comment.deleteMany({
            where: {postId: Number(id)}
        });

        const post = await prisma.post.delete({
            where: {id: Number(id)},
        })
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json(error);
    }
}