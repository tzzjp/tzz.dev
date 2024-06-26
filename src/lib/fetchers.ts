import { getCollection } from "astro:content";

export async function getCategories() {
  const posts = (await getCollection("blog")).filter(entry => !entry.id.endsWith('index.md'));
  const categories = [
    ...new Set(posts.map((post) => post.data.category).flat()),
  ];

  return categories;
}

export async function getPosts() {
  const posts = (await getCollection("blog"))
    .filter(entry => !entry.id.endsWith('index.md'))
    .sort(
      (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
    )
    .map(entry => {
      if(entry.data.cover === undefined) {
        entry.data.cover = '/images/blog/placeholder-3.jpg';
      }
      return entry;
    });

  return posts;
}

export async function getPostsByCategory(category: string) {
  const posts = (await getCollection("blog"))
    .filter((post) => post.data.category.includes(category) && !post.id.endsWith('index.md'))
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

  return posts;
}

export async function getGuides() {
  const guides = (await getCollection("guides"))
    .filter((guide) => guide.data.published)
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

  return guides;
}
