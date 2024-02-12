require("dotenv").config();

const webflowService = require("../services/webflowService");
const WEBFLOW_COLLECTION_ID_ARTISTS = process.env.WEBFLOW_COLLECTION_ID_ARTISTS;

const addArtist = async (req, res) => {
  try {
    const newItem = await webflowService.createItem(
      WEBFLOW_COLLECTION_ID_ARTISTS,
      req.body
    );
    res.status(201).json(newItem);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error adding artist", error: error.message });
  }
};

const getArtists = async (req, res) => {
  try {
    const items = await webflowService.getItems(WEBFLOW_COLLECTION_ID_ARTISTS);
    res.status(200).json(items);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching artists", error: error.message });
  }
};

const getArtistById = async (req, res) => {
  const { id } = req.params;
  try {
    const item = await webflowService.getItemById(
      WEBFLOW_COLLECTION_ID_ARTISTS,
      id
    );
    if (item) {
      res.status(200).json(item);
    } else {
      res.status(404).json({ message: "Artist not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching artist", error: error.message });
  }
};

const updateArtist = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedItem = await webflowService.updateItem(
      WEBFLOW_COLLECTION_ID_ARTISTS,
      id,
      req.body
    );
    res.status(200).json(updatedItem);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error updating artist", error: error.message });
  }
};

const deleteArtist = async (req, res) => {
  const { id } = req.params;
  try {
    await webflowService.deleteItem(WEBFLOW_COLLECTION_ID_ARTISTS, id);
    res.status(204).send();
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error deleting artist", error: error.message });
  }
};

module.exports = {
  addArtist,
  getArtists,
  getArtistById,
  updateArtist,
  deleteArtist,
};
