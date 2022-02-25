// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import Article from '../../../models/Article';
import articles from './articles.mock';

type Data = {
  articles: Array<Article>
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ articles: articles })
}
