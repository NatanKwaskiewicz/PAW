import prisma from '../prisma.js';

export const getCategories = async (req, res, next) => {
    try {
        const category = await prisma.category.findMany();
        res.status(200).json(category);
    } catch (error) {
        next(error);
    }
}

export const getOneCategory = async (req, res, next) => {
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
        next(error);
    }
}

export const createCategory = async (req, res, next) => {
    try {
        const { categoryContent } = req.body;

        if (!categoryContent) {
            return res.status(400).json({
                error: 'Missing required fields'
            })
        }

        const category = await prisma.category.create({
            data: categoryContent
        })
        res.status(201).json(category);
    } catch (error) {
        next(error);
    }
}

export const updateCategoryPut = async (req, res, next) => {
    try {
        const id = req.params.id;
        const categoryContent = req.body;
        const category = await prisma.category.update({
            where: {id: Number(id)},
            data: categoryContent
        })
        res.status(200).json(category);
    } catch (error) {
        next(error);
    }
}

export const updateCategoryPatch = async (req, res, next) => {
    try {
        const id = req.params.id;
        const categoryContent = req.body;
        const category = await prisma.category.update({
            where: {id: Number(id)},
            data: categoryContent
        })
        res.status(200).json(category);
    } catch (error) {
        next(error);
    }
}

export const deleteCategory = async (req, res, next) => {
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
        next(error);
    }
}