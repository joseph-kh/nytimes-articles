declare module "*.ttf";

type Article = {
  id: string;
  title: string;
  published_date: string;
  section: string;
  byline: string;
  media: string | null;
  abstract: string;
};
