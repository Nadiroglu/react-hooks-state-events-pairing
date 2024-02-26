import video from "../data/video.js";
import Click from "./Click.js";
import Comments from "./Comments.js";

function App() {
  console.log("Here's your data:", video);


  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
     
     
     <Click />
      <Comments
       title = {video.title} 
       view = {video.views}
        createdAt={video.createdAt}
        user1 = {video.comments[0].user}
        user1C = {video.comments[0].comment}
        user2 = {video.comments[1].user}
        user2C = {video.comments[1].comment}
        size = {video.comments.length}
        
        />
    </div>
  );
}

export default App;
