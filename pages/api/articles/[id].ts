import { NextApiRequest, NextApiResponse } from "next";
import Article from "../../../models/Article";
import articles from "./articles.mock";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  let article: Article | undefined;

  article = articles.find((a) => a.id == id);

  if (!article) res.status(404).send("not found!");

  res.status(200).json({ article });
}
