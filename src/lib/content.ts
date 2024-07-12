import { getCollection } from 'astro:content';
import { getGitInfo } from '@/lib/git';
import { format } from 'date-fns';

export async function getBlogs() {
  const blogs = await getCollection('blog', ({ id }) => !id.endsWith('index.md'));
  
  const blogsWithGitInfo = await Promise.all(
    blogs.map(async (blog) => {
      const gitInfo = await getGitInfo('./src/content/blog/' + blog.id);
      return gitInfo ? {
        ...blog,
        data: {
          ...blog.data,
          ...gitInfo,
          pubDate: format(gitInfo.pubDate, 'yyyy-MM-dd HH:mm:ss'),
          lastModified: format(gitInfo.lastModified, 'yyyy-MM-dd HH:mm:ss'),
        },
      } : blog;
    })
  );

  return blogsWithGitInfo;
}

export async function getCategories() {
  const categories = await getCollection('blog', ({ id }) => id.endsWith('index.md'));
  const blogs = await getBlogs();
  
  return categories.map(category => ({
    ...category,
    subCategories: categories.filter(subCategory => {
      if (subCategory.id === category.id) return false;
      const relativeSlug = subCategory.slug.replace(category.slug, '');
      return relativeSlug.startsWith('/') && !relativeSlug.slice(1).includes('/');
    }),
    blogs: blogs.filter(blog => {
      const relativeSlug = blog.slug.replace(category.slug, '');
      return relativeSlug.startsWith('/') && !relativeSlug.slice(1).includes('/');
    }),
  }));
}