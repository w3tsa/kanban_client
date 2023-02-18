import { useEffect, useState, useRef } from "react";
import socketIO from "socket.io-client";
import { useParams } from "react-router-dom";

const socket = socketIO.connect("http://localhost:5000");

const Comments = () => {
  const { category, id } = useParams();
  const [comment, setComment] = useState("");
  const commentRef = useRef(null);
  const [commentList, setCommentList] = useState([]);

  useEffect(() => {
    socket.emit("fetchComments", { category, id });
  }, [category, id]);

  useEffect(() => {
    socket.on("comments", (data) => setCommentList(data));
  }, []);

  const addComment = (e) => {
    e.preventDefault();
    console.log(commentRef.current.value);
    socket.emit("addComment", {
      comment: commentRef.current.value,
      category,
      id,
      userId: localStorage.getItem("userID"),
    });
    setComment("");
  };

  return (
    <div className="comments__container">
      <form className="comment__form" onSubmit={addComment}>
        <label htmlFor="comment">Add a comment</label>
        <textarea
          placeholder="Type your comment..."
          // value={comment}
          // onChange={(e) => setComment(e.target.value)}
          ref={commentRef}
          rows={5}
          id="comment"
          name="comment"
          required
        ></textarea>
        <button className="commentBtn">ADD COMMENT</button>
      </form>
      <div className="comments__section">
        <h2>Existing Comments</h2>
        {console.log(commentList)}
        {commentList?.map((comment) => (
          <div key={comment.id}>
            <p>
              <span style={{ fontWeight: "bold" }}>{comment.text} </span>by{" "}
              {comment.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comments;
