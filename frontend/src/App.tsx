import { useEffect, useState } from "react";
import axios from "./config/axios";
import CardsList from "./components/cardList";
import getTopStories from "./services/fetch";

const App = () => {
  const [data, setData] = useState([]);
  const path = window.location.href.split("/")[3].toString();

  useEffect(() => {
    if (path === "") {
      window.location.href = "home";
    }
    getTopStories(path).then((res: any) => {
      if (res.error) {
        setData(() => []);
        return;
      }
      setData(() => res);
    });
  }, [window.location.href]);

  return (
    <div className="min-h-screen">
      {data ? (
        <CardsList data={data} />
      ) : (
        <div className="flex justify-center items-center h-screen">
          <h1 className="text-3xl text-gray-700">No data found</h1>
        </div>
      )}
    </div>
  );
};

export default App;
