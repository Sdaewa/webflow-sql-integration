const dbService = require("../services/dbService");

const addBlogPost = async (req, res) => {
  try {
    const { title, content, authorId } = req.body;
    const newItem = await dbService.addBlogPost(title, content, authorId);
    res.status(201).json(newItem);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error adding blog post", error: error.message });
  }
};

const getBlogPosts = async (req, res) => {
  try {
    const items = await dbService.getAllBlogPosts();
    res.status(200).json(items);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching blog posts", error: error.message });
  }
};

const getBlogPostById = async (req, res) => {
  const { id } = req.params;
  try {
    const item = await dbService.getBlogPostById(id);
    if (item.length > 0) {
      res.status(200).json(item[0]);
    } else {
      res.status(404).json({ message: "Blog post not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching blog post", error: error.message });
  }
};

const updateBlogPost = async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  try {
    const updatedItem = await dbService.updateBlogPost(id, title, content);
    if (updatedItem.length > 0) {
      res.status(200).json(updatedItem[0]);
    } else {
      res.status(404).json({ message: "Blog post not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error updating blog post", error: error.message });
  }
};

const deleteBlogPost = async (req, res) => {
  const { id } = req.params;
  try {
    await dbService.deleteBlogPost(id);
    res.status(204).send();
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error deleting blog post", error: error.message });
  }
};

module.exports = {
  addBlogPost,
  getBlogPosts,
  getBlogPostById,
  updateBlogPost,
  deleteBlogPost,
};
