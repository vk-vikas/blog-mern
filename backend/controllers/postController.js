import Post from "../models/post.js";

export const createPost = async (req, res) => {
  try {
    // create new post
    const { title, summary, content } = req.body;
    if (!title || !summary || !content) {
      res.status(400).json({
        status: "fail",
        message: "Please Enter all the data for Post",
      });
    }
    const newPost = await Post.create({
      title,
      summary,
      content,
      author: req.body.id,
    });
    res.status(201).json({
      status: "success",
      data: {
        newPost,
      },
    });
  } catch (error) {}
};

export const getAllPost = async (req, res) => {
  try {
    const allPosts = await Post.find();
    res.status(200).json({
      status: "success",
      data: allPosts,
    });
    // fetch all post
  } catch (error) {}
};
export const updatePost = async (req, res) => {
  try {
    // update a post
  } catch (error) {}
};

export const deletePost = async (req, res) => {
  try {
    // delete a post
  } catch (error) {}
};
