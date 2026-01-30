import { useState, useEffect } from 'react';
import './App.css';
import { getPosts } from './API/index.js';
import PostCard from './components/PostCard.jsx';
function App() {

  const [data, setData] = useState([]);

  useEffect(() => {
    getPosts().then((posts) => {
      setData(posts);
    });
  }, []);

  return (
    <div>
      {
        data.length > 0
          ? data.map((e) => <PostCard title={e.title} body={e.body}/>)
          : <p>No Data</p>
      }
    </div>
  );
}

export default App;