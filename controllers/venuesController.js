const dbService = require("../services/dbService");

const addVenue = async (req, res) => {
  try {
    const { name, location } = req.body;
    const newItem = await dbService.addVenue(name, location);
    res.status(201).json(newItem);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error adding venue", error: error.message });
  }
};

const getVenues = async (req, res) => {
  try {
    const items = await dbService.getAllVenues();
    res.status(200).json(items);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching venues", error: error.message });
  }
};

const getVenueById = async (req, res) => {
  const { id } = req.params;
  try {
    const item = await dbService.getVenueById(id);
    if (item.length > 0) {
      res.status(200).json(item[0]);
    } else {
      res.status(404).json({ message: "Venue not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching venue", error: error.message });
  }
};

const updateVenue = async (req, res) => {
  const { id } = req.params;
  const { name, location } = req.body;
  try {
    const updatedItem = await dbService.updateVenue(id, name, location);
    if (updatedItem.length > 0) {
      res.status(200).json(updatedItem[0]);
    } else {
      res.status(404).json({ message: "Venue not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error updating venue", error: error.message });
  }
};

const deleteVenue = async (req, res) => {
  const { id } = req.params;
  try {
    await dbService.deleteVenue(id);
    res.status(204).send();
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error deleting venue", error: error.message });
  }
};

module.exports = {
  addVenue,
  getVenues,
  getVenueById,
  updateVenue,
  deleteVenue,
};
