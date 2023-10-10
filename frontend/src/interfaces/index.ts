export interface IArticle {
    title: string;
    abstract: string;
    url: string;
    byline: string;
    published_date: string;
    multimedia: {
      url: string;
      height: number;
      width: number;
    };
  }
  