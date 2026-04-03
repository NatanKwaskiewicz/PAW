import { useMutation, useQueryClient } from '@tanstack/react-query'
import type { CreateComment } from '../types/CreateComment/CreateComment.ts'
const API_URL: string | undefined = import.meta.env.VITE_API_URL

const createComment = async (data: CreateComment) => {
    const res: Response = await fetch(`${API_URL}/comments`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    })
    if (!res.ok) throw new Error('Failed while creating comment')
    return res.json()
}

export const useCreateComment = (postId: number) => {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: createComment,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['comments', postId] })
        },
    })
}
