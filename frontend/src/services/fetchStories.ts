export default function fetchStories(path: string) {
    return fetch(`https://newyork-mern-task.vercel.app/nytimes/topstories/${path}`,{
        method: 'GET',
        credentials:"include",
        headers:{
            "Content-Type":"application/json",
        }
    }).then((res) => {
        return res.json()
      })
}