const dbService = require("../services/dbService");

const addArtist = async (req, res) => {
  try {
    const { name, bio } = req.body;
    const newItem = await dbService.addArtist(name, bio);
    res.status(201).json(newItem);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error adding artist", error: error.message });
  }
};

const getArtists = async (req, res) => {
  try {
    const items = await dbService.getAllArtists();
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
    const item = await dbService.getArtistById(id);
    if (item.length > 0) {
      res.status(200).json(item[0]);
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
  const { name, bio } = req.body;
  try {
    const updatedItem = await dbService.updateArtist(id, name, bio);
    if (updatedItem.length > 0) {
      res.status(200).json(updatedItem[0]);
    } else {
      res.status(404).json({ message: "Artist not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error updating artist", error: error.message });
  }
};

const deleteArtist = async (req, res) => {
  const { id } = req.params;
  try {
    await dbService.deleteArtist(id);
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
