import { useQuery } from '@tanstack/react-query'
import type { Comment } from '../types/Comment/Comment.ts'

const API_URL: string | undefined = import.meta.env.VITE_API_URL

export const getComments = async (
    id: string | undefined
): Promise<Comment[]> => {
    const res: Response = await fetch(`${API_URL}/comments/posts/${id}`)
    if (!res.ok) throw new Error('Error fetching comments')
    return res.json()
}

export const useComments = (id: string | undefined) => {
    return useQuery<Comment[]>({
        queryKey: ['comments', id],
        queryFn: () => getComments(id),
        enabled: !!id,
    })
}
