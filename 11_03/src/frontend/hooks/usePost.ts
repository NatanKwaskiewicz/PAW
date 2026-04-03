import { useQuery } from '@tanstack/react-query'
import type { Post } from '../types/Post/Post.ts'

const API_URL: string | undefined = import.meta.env.VITE_API_URL

export const getPost = async (id: string | undefined): Promise<Post> => {
    const res: Response = await fetch(`${API_URL}/posts/${id}`)
    if (!res.ok) throw new Error('Error fetching post')
    return res.json()
}

export const usePost = (id: string | undefined) => {
    return useQuery<Post>({
        queryKey: ['post', id],
        queryFn: () => getPost(id),
        enabled: !!id,
    })
}
