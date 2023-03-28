import { CreatePost } from "./CreatePost";
import { ListPosts } from "./ListPosts";

export const App = () => {
  return (
    <div className="container">
      <h1>Blog</h1>
      <h2>Create Post</h2>
      <CreatePost />
      <hr />
      <h2>Posts</h2>
      <ListPosts />
    </div>
  );
};
