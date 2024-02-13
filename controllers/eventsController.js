const dbService = require("../services/dbService");

const addEvent = async (req, res) => {
  try {
    const { title, description, date } = req.body;
    const newItem = await dbService.addEvent(title, description, date);
    res.status(201).json(newItem);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error adding event", error: error.message });
  }
};

const getEvents = async (req, res) => {
  try {
    const items = await dbService.getAllEvents();
    res.status(200).json(items);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching events", error: error.message });
  }
};

const getEventById = async (req, res) => {
  const { id } = req.params;
  try {
    const item = await dbService.getEventById(id);
    if (item.length > 0) {
      res.status(200).json(item[0]);
    } else {
      res.status(404).json({ message: "Event not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching event", error: error.message });
  }
};

const updateEvent = async (req, res) => {
  const { id } = req.params;
  const { title, description, date } = req.body;
  try {
    const updatedItem = await dbService.updateEvent(
      id,
      title,
      description,
      date
    );
    if (updatedItem.length > 0) {
      res.status(200).json(updatedItem[0]);
    } else {
      res.status(404).json({ message: "Event not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error updating event", error: error.message });
  }
};

const deleteEvent = async (req, res) => {
  const { id } = req.params;
  try {
    await dbService.deleteEvent(id);
    res.status(204).send();
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error deleting event", error: error.message });
  }
};

module.exports = {
  addEvent,
  getEvents,
  getEventById,
  updateEvent,
  deleteEvent,
};
