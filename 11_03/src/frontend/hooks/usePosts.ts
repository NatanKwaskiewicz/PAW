import { useQuery } from '@tanstack/react-query'
import type { Post } from '../types/Post/Post.ts'

const API_URL: string | undefined = import.meta.env.VITE_API_URL

export const getPosts = async (): Promise<Post[]> => {
    const res: Response = await fetch(`${API_URL}/posts`)
    if (!res.ok) throw new Error('Error fetching posts')
    return res.json()
}

export const usePosts = () => {
    return useQuery<Post[]>({
        queryKey: ['posts'],
        queryFn: getPosts,
    })
}
