require('dotenv').config()
const express = require('express');
const app = express();
const { PrismaClient } = require('@prisma/client')
const { MongoClient } = require('mongodb');
const hostname = '127.0.0.1';
const port = 3000;
const { mongoUrl, mongoClient, _createCollection } = require('mongoDB.js');

const prisma = new PrismaClient();

app.use(express.json())

//model Post

app.get('/', (req, res) => {})

app.get('/post', async (req, res) => {
    try {
        const posts = await prisma.post.findMany();
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json(error);
    }
})

app.get('/post/:id', async (req, res) => {
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
})

app.post('/post', async (req, res) => {
    try {
        const postContent = req.body;
        const post = await prisma.post.create({
            data: postContent
        })
        res.status(201).json(post);
    } catch (error) {
        res.status(500).json(error);
    }
})

app.put('/post/:id', async (req, res) => {
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
})

app.patch('/post/:id', async (req, res) => {
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
})

app.delete('/post/:id', async (req, res) => {
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
})

//model Category

app.get('/category', async (req, res) => {
    try {
        const category = await prisma.category.findMany();
        res.status(200).json(category);
    } catch (error) {
        res.status(500).json(error);
    }
})

app.get('/category/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const category = await prisma.category.findUnique({
            where: {id: Number(id)},
        })

        if (category==null) {
            res.status(404).json('Category not found');
        }
        else {
            res.status(200).json(category);
        }

    } catch (error) {
        res.status(500).json(error);
    }
})

app.post('/category', async (req, res) => {
    try {
        const categoryContent = req.body;
        const category = await prisma.category.create({
            data: categoryContent
        })
        res.status(201).json(category);
    } catch (error) {
        res.status(500).json(error);
    }
})

app.put('/category/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const categoryContent = req.body;
        const category = await prisma.category.update({
            where: {id: Number(id)},
            data: categoryContent
        })
        res.status(200).json(category);
    } catch (error) {
        res.status(500).json(error);
    }
})

app.patch('/category/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const categoryContent = req.body;
        const category = await prisma.category.update({
            where: {id: Number(id)},
            data: categoryContent
        })
        res.status(200).json(category);
    } catch (error) {
        res.status(500).json(error);
    }
})

app.delete('/category/:id', async (req, res) => {
    try {
        const id = req.params.id;

        //deleting any posts (and their comments) which have this category as a foreign key
        await prisma.comment.deleteMany({
            where: {
                post: {categoryId: Number(id)}
            }
        });

        await prisma.post.deleteMany({
            where: {categoryId: Number(id)}
        });

        const category = await prisma.category.delete({
            where: {id: Number(id)},
        })
        res.status(200).json(category);
    } catch (error) {
        res.status(500).json(error);
    }
})

//model Comment

app.get('/comment', async (req, res) => {
    try {
        const comments = await prisma.comment.findMany();
        res.status(200).json(comments);
    } catch (error) {
        res.status(500).json(error);
    }
})

app.get('/comment/:id', async (req, res) => {
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
        res.status(500).json(error);
    }
})

app.post('/comment', async (req, res) => {
    try {
        const commentContent = req.body;
        const comment = await prisma.comment.create({
            data: commentContent
        })
        res.status(201).json(comment);
    } catch (error) {
        res.status(500).json(error);
    }
})

app.put('/comment/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const commentContent = req.body;
        const comment = await prisma.comment.update({
            where: {id: Number(id)},
            data: commentContent
        })
        res.status(200).json(comment);
    } catch (error) {
        res.status(500).json(error);
    }
})

app.patch('/comment/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const commentContent = req.body;
        const comment = await prisma.comment.update({
            where: {id: Number(id)},
            data: commentContent
        })
        res.status(200).json(comment);
    } catch (error) {
        res.status(500).json(error);
    }
})

app.delete('/comment/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const comment = await prisma.comment.delete({
            where: {id: Number(id)},
        })
        res.status(200).json(comment);
    } catch (error) {
        res.status(500).json(error);
    }
})

app.listen(port, hostname, () => {
    console.log(`Server started at http://${hostname}:${port}`);
});