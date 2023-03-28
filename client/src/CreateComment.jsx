import { useState } from "react";
import axios from "axios";

export const CreateComment = ({ postId }) => {
  const [content, setContent] = useState("");

  const handleChange = (e) => {
    setContent(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios.post(`http://localhost:4001/posts/${postId}/comments`, {
      content,
    });

    setContent("");
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>New comment</label>
          <input
            value={content}
            onChange={handleChange}
            type="text"
            className="form-control"
          />
        </div>
        <button className="btn, btn-primary">Submit</button>
      </form>
    </div>
  );
};
