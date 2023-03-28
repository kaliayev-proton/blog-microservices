import { useState, useEffect } from "react";
import axios from "axios";
import { CreateComment } from "./CreateComment";
import { ListComments } from "./ListComments";

export const ListPosts = () => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    const res = await axios.get("http://localhost:4002/posts");
    console.log(res.data);
    const data = res.data;

    setPosts(Object.values(data));
  };
  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div>
      <ul
        className="d-flex flex-row flex-wrap justify-content-between"
        style={{ margin: 0, padding: 0 }}
      >
        {posts.map(({ title, id, comments }) => (
          <li
            className="card"
            style={{ width: "30%", marginBottom: "20px" }}
            key={id}
          >
            <div className="card-body">
              <h3>{title}</h3>
              <ListComments comments={comments} />
              <CreateComment postId={id} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
