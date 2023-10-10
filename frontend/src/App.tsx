import { useEffect, useState } from "react";
import axios from "./config/axios";
import CardsList from "./components/cardList";
import getTopStories from "./services/fetch";

const App = () => {
  const [data, setData] = useState([]);
  const path = window.location.href.split("/")[3].toString();
  useEffect(() => {
    getTopStories(path).then((res: any) => {
      setData(() => res);
    });
  }, [window.location.href]);

  return (
    <div className="min-h-screen">
      <CardsList data={data} />
    </div>
  );
};

export default App;
