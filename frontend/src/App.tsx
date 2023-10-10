import { useEffect, useState } from "react";
import axios from "./config/axios";
import CardsList from "./components/cardList";

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("/nytimes").then((res: any) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const data = res.data.results.map((story: any) => ({
        title: story.title,
        abstract: story.abstract,
        url: story.url,
        byline: story.byline,
        published_date: story.published_date,
        multimedia: {
          url: story.multimedia[1].url,
          height: story.multimedia[1].height,
          width: story.multimedia[1].width,
        },
      }));
      setData(() => data);
    });
  }, []);

  return (
    <div className="min-h-screen">
      <CardsList data={data} />
    </div>
  );
};

export default App;
