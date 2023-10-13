import { IArticle } from "../interfaces";

type Props = {
  article: IArticle;
};

const formatDate = (date: string) => {
  const dateObj = new Date(date);
  const day = dateObj?.getDate();
  const month = dateObj?.getMonth() + 1;
  const year = dateObj?.getFullYear();

  return `${day}/${month}/${year}`;
};

const Card: React.FC<Props> = ({ article }) => {
  return (
    <a
      href={article?.url}
      target="_blank"
      className="group max-w-md hover:drop-shadow-2xl rounded-lg overflow-hidden shadow-md cursor-pointer hover:scale-105 transform transition-all duration-500"
    >
      {article.multimedia.url && (
        <img
          src={article?.multimedia?.url}
          placeholder="blur"
          loading="lazy"
          className="object-cover"
          width={600}
          height={400}
          alt={article?.title}
        />
      )}

      <div className="absolute bottom-0 w-full h-full bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
      <div className="absolute bottom-0 w-full p-3">
        <h1 className="text-white group-hover:text-gray-200 text-lg font-semibold transition-all duration-500">
          {article?.title}
        </h1>

        <div className="flex justify-between gap-2 items-center mt-2 text-white group-hover:text-gray-200 text-sm border-t border-gray-300 pt-2 border-opacity-50">
          <p className="">{article?.byline}</p>
          <span className="">{formatDate(article?.published_date)}</span>
        </div>
      </div>
    </a>
  );
};

export default Card;
