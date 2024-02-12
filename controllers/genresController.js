require("dotenv").config();

const webflowService = require("../services/webflowService");
const WEBFLOW_COLLECTION_ID_GENRES = process.env.WEBFLOW_COLLECTION_ID_GENRES;

const addGenre = async (req, res) => {
  try {
    const newItem = await webflowService.createItem(
      WEBFLOW_COLLECTION_ID_GENRES,
      req.body
    );
    res.status(201).json(newItem);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error adding genre", error: error.message });
  }
};

// Get all genres
const getGenres = async (req, res) => {
  try {
    const items = await webflowService.getItems(WEBFLOW_COLLECTION_ID_GENRES);
    res.status(200).json(items);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching genres", error: error.message });
  }
};

// Get a genre by ID
const getGenreById = async (req, res) => {
  const { id } = req.params;
  try {
    const item = await webflowService.getItemById(
      WEBFLOW_COLLECTION_ID_GENRES,
      id
    );
    if (item) {
      res.status(200).json(item);
    } else {
      res.status(404).json({ message: "Genre not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching genre", error: error.message });
  }
};

// Update a genre
const updateGenre = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedItem = await webflowService.updateItem(
      WEBFLOW_COLLECTION_ID_GENRES,
      id,
      req.body
    );
    res.status(200).json(updatedItem);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error updating genre", error: error.message });
  }
};

// Delete a genre
const deleteGenre = async (req, res) => {
  const { id } = req.params;
  try {
    await webflowService.deleteItem(WEBFLOW_COLLECTION_ID_GENRES, id);
    res.status(204).send(); // No Content
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error deleting genre", error: error.message });
  }
};

module.exports = {
  addGenre,
  getGenres,
  getGenreById,
  updateGenre,
  deleteGenre,
};
