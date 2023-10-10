import Card from "./card";
import { IArticle } from "../interfaces";

type Props = {
  data: IArticle[];
};

const CardsLists: React.FC<Props> = ({ data }) => {
  return (
    <div className="flex flex-wrap gap-4 p-4 items-center justify-center">
      {data.map((story: IArticle) => (
        <Card article={story} key={story.url} />
      ))}
    </div>
  );
};

export default CardsLists;
