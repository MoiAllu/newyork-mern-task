import { useEffect, useState } from "react";
import CardsList from "./components/cardList";
import getTopStories from "./services/fetch";
import Layout from "./layouts";
import LoadingSkeleton from "./components/loadingSkeleton";

const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [navbarValue, setNavbarValue] = useState("home");
  const skeletonElements = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  useEffect(() => {
    setLoading(() => true);
    getTopStories(navbarValue).then((res: any) => {
      if (res.error) {
        setData(() => []);
        return;
      }
      setData(() => res);
      setLoading(() => false);
    });
  }, [navbarValue]);

  return (
    <div className="min-h-screen">
      {data ? (
        <Layout setNavbarValue={setNavbarValue} navbarValue={navbarValue}>
          {loading ? (
            <div className="p-4 items-center justify-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-4">
              {skeletonElements.map((index) => (
                <LoadingSkeleton key={index} />
              ))}
            </div>
          ) : (
            <CardsList data={data} />
          )}
        </Layout>
      ) : (
        <div className="flex justify-center items-center h-screen">
          <h1 className="text-3xl text-gray-700">No data found</h1>
        </div>
      )}
    </div>
  );
};

export default App;
