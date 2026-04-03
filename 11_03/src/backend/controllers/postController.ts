import { prisma } from '../prisma.ts'
import type { Request, Response, NextFunction } from 'express'

export const getPosts = async (
    _req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const posts = await prisma.post.findMany()
        res.status(200).json(posts)
    } catch (error) {
        next(error)
    }
}

export const getOnePost = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const id = req.params.id
        const post = await prisma.post.findUnique({
            where: { id: Number(id) },
        })

        if (post == null) {
            res.status(404).json('Post not found')
        } else {
            res.status(200).json(post)
        }
    } catch (error) {
        next(error)
    }
}

export const createPost = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const { title, content, author } = req.body

        const post = await prisma.post.create({
            data: { title, content, author },
        })
        res.status(201).json(post)
    } catch (error) {
        next(error)
    }
}
