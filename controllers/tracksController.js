const dbService = require("../services/dbService");

const addTrack = async (req, res) => {
  try {
    const { title, artistId } = req.body;
    const newItem = await dbService.addTrack(title, artistId);
    res.status(201).json(newItem);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error adding track", error: error.message });
  }
};

const getTracks = async (req, res) => {
  try {
    const items = await dbService.getAllTracks();
    res.status(200).json(items);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching tracks", error: error.message });
  }
};

const getTrackById = async (req, res) => {
  const { id } = req.params;
  try {
    const item = await dbService.getTrackById(id);
    if (item.length > 0) {
      res.status(200).json(item[0]);
    } else {
      res.status(404).json({ message: "Track not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching track", error: error.message });
  }
};

const updateTrack = async (req, res) => {
  const { id } = req.params;
  const { title, artistId } = req.body;
  try {
    const updatedItem = await dbService.updateTrack(id, title, artistId);
    if (updatedItem.length > 0) {
      res.status(200).json(updatedItem[0]);
    } else {
      res.status(404).json({ message: "Track not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error updating track", error: error.message });
  }
};

const deleteTrack = async (req, res) => {
  const { id } = req.params;
  try {
    await dbService.deleteTrack(id);
    res.status(204).send();
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error deleting track", error: error.message });
  }
};

module.exports = {
  addTrack,
  getTracks,
  getTrackById,
  updateTrack,
  deleteTrack,
};
