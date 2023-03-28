export const ListComments = ({ comments }) => {
  return (
    <div>
      <ul>
        {comments.map(({ content, id, status }) => {
          let cont;
          if (status === "approved") {
            cont = content;
          }
          if (status === "pending") {
            cont = "This comment is awaiting moderation";
          }
          if (status === "rejected") {
            cont = "This comment has been rejected";
          }
          return <li key={id}>{cont}</li>;
        })}
      </ul>
    </div>
  );
};
