require('dotenv').config()
const express = require('express');
const app = express();
const { PrismaClient } = require('@prisma/client')
const hostname = '127.0.0.1';
const port = 3000;

const prisma = new PrismaClient();

app.use(express.json())


//model Post

app.get('/post', async (req, res) => {
    const posts = await prisma.post.findMany();
    res.status(200).json(posts);
})

app.get('/post/:id', async (req, res) => {
    const id = req.params.id;
    const post = await prisma.post.findUnique({
        where: { id: Number(id) }
    });
    res.json(post);
})

app.post('/post', async (req, res) => {
    const {title, content, author, category} = req.body;
    const result = await prisma.post.create({
        data: {
            title,
            content,
            author,
            category
        },
    })
    res.status(201).json(result);
})

app.put('/post/:id', async (req, res) => {
    const id = req.params.id;
    const post = await prisma.post.update({
        where: { id: Number(id) },
    })
    res.status(200).json(post);
})

app.delete('/post/:id', async (req, res) => {
    const id = req.params.id;
    const post = await prisma.post.delete({
        where: { id: Number(id) },
    })
    res.status(200).json(post);
})

//model Category

app.get('/category', async (req, res) => {
    const category = await prisma.category.findMany();
    res.status(200).json(category);
})

app.get('/category/:id', async (req, res) => {
    const id = req.params.id;
    const category = await prisma.category.findUnique({
        where: { id: Number(id) },
    })
    res.status(200).json(category);
})

app.post('/category', async (req, res) => {
    const category = req.body.category;
    const result = await prisma.category.create({
        data: {
            category: String(category)
        }
    })
    res.status(201).json(result);
})

app.put('/category/:id', async (req, res) => {
    const id = req.params.id;
    const category = await prisma.category.update({
        where: { id: Number(id) },
    })
    res.status(200).json(category);
})

app.delete('/category/:id', async (req, res) => {
    const id = req.params.id;
    const category = await prisma.category.delete({
        where: { id: Number(id) },
    })
    res.status(200).json(category);
})

//model Comment

app.get('/comment', async (req, res) => {
    const comments = await prisma.comment.findMany();
    res.status(200).json(comments);
})

app.get('/comment/:id', async (req, res) => {
    const id = req.params.id;
    const comments = await prisma.comment.findUnique({
        where: { id: Number(id) },
    })
    res.status(200).json(comments);
})

app.post('/comment', async (req, res) => {
    const {content, author, post, postId } = req.body;
    const result = await prisma.category.create({
        data: {
            content: content,
            author: author,
            post: postId,
            postId: postId,
        }
    })
    res.status(201).json(result);
})

app.put('/comment/:id', async (req, res) => {
    const id = req.params.id;
    const comment = await prisma.comment.update({
        where: { id: Number(id) },
    })
    res.status(200).json(comment);
})

app.delete('/comment/:id', async (req, res) => {
    const id = req.params.id;
    const comment = await prisma.comment.delete({
        where: { id: Number(id) },
    })
    res.status(200).json(comment);
})
app.listen(port, hostname, () => {
    console.log(`Server started at http://${hostname}:${port}`);
});