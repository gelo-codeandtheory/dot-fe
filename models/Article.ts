import Author from "./Author";

export default interface Article {
  id: string;
  publisher: string;
  title: string;
  author: Author;
  datePublish: string;
  timeRead: string;
  subheader?: string;
  content: any;
  description?: string;
  tags?: string[];
  link?: string;
}
