import axios from "../config/axios";
const getTopStories = async (params: string ) => {
  try {
    // Make the GET request to the New York Times API
    console.log(params)
    const res = await axios.get(`/nytimes/topstories/${params}`);
    
    // Check the response status and data status
    if (res.data.results.length === 0) {
      throw new Error('Error fetching stories');
    }
    
    // Map the response data to a more readable format
    const data = res.data.results.map((story: any) => ({
      title: story.title ? story.title : 'N/A',
      abstract: story.abstract ? story.abstract : 'N/A',
      url: story.url ? story.url : 'N/A',
      byline: story.byline ? story.byline : 'N/A',
      published_date: story.published_date ? story.published_date : 'N/A',
      multimedia: {
        url: story.multimedia ? story.multimedia[1].url : '',
        height: story.multimedia ? story.multimedia[1].height : '300',
        width: story.multimedia ? story.multimedia[1].width : '450',
      },
    }));

    return data;
  } catch (error) {
    // Handle any errors that occur during the request or data processing
    console.error('Error:', error);
    throw error; // Re-throw the error to be handled by the caller if needed
  }
}
export default getTopStories;
