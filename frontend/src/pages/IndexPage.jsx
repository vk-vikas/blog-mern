import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts } from "../store/postSlice";

const IndexPage = () => {
  const { posts } = useSelector((store) => store.posts);
  const { isLoggedIn } = useSelector((store) => store.user);
  console.log("posts", posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPosts());
  }, [isLoggedIn]);

  return (
    <div>
      {isLoggedIn == false ? (
        <div>Please login to see posts</div>
      ) : (
        posts.map((post) => <p>{post.title}</p>)
      )}
    </div>
  );
};

export default IndexPage;
