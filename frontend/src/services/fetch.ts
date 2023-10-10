import axios from "../config/axios";
const getTopStories = async (params: string) => {
  console.log(params)
     const res = await axios.get("/nytimes/topstories/" + params);
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
      return data;
}
export default getTopStories;