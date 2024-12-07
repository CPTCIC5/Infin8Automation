import { BlogPost } from '@/types/blog';

// This would typically connect to your backend API
export const blogService = {
  async getAllPosts(): Promise<BlogPost[]> {
    // Replace with actual API call
    const response = await fetch('/api/blog/posts');
    return response.json();
  },

  async getPostBySlug(slug: string): Promise<BlogPost> {
    // Replace with actual API call
    const response = await fetch(`/api/blog/posts/${slug}`);
    return response.json();
  },

  async getPostsByCategory(category: string): Promise<BlogPost[]> {
    // Replace with actual API call
    const response = await fetch(`/api/blog/categories/${category}`);
    return response.json();
  }
}; 