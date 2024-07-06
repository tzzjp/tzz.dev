import simpleGit from 'simple-git';
import { getCollection } from 'astro:content';

const authors = await getCollection('author');
authors.push({
  id: '1',
  collection: 'author',
  data: {
    name: 'tzzjp',
    displayName: 'tzz'
  }
});

type GitInfo = {
  author: string,
  pubDate: Date,
  lastModified: Date,
}
export async function getGitInfo(filePath: string): Promise<GitInfo | null> {
  const git = simpleGit();
  const log = await git.log({ file: filePath });
  if(log.total === 0) {
    return null;
  }

  const firstCommit = log.all[log.total - 1];
  const lastCommit = log.latest;
  const authorInfo = authors.find(author => author.data.name === firstCommit.author_name);
  const displayName = authorInfo ? authorInfo.data.displayName : firstCommit.author_name;
  const gitInfo: GitInfo = {
    author: displayName,
    pubDate: new Date(firstCommit.date),
    lastModified: lastCommit?.date ? new Date(lastCommit.date) : new Date(firstCommit.date)
  }
  
  return gitInfo;
}