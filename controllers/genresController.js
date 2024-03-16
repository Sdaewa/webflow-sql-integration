const dbService = require("../services/dbService");

const addGenre = async (req, res) => {
  try {
    const { name, description } = req.body;
    const newItem = await dbService.addGenre(name, description);
    res.status(201).json(newItem);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error adding genre", error: error.message });
  }
};

const getGenres = async (req, res) => {
  try {
    const items = await dbService.getAllGenres();
    res.status(200).json(items);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "Error fetching genres", error: error.message });
  }
};

const getGenreById = async (req, res) => {
  const { id } = req.params;
  try {
    const item = await dbService.getGenreById(id);
    if (item.length > 0) {
      res.status(200).json(item[0]);
    } else {
      res.status(404).json({ message: "Genre not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching genre", error: error.message });
  }
};

const updateGenre = async (req, res) => {
  const { id } = req.params;
  const { name, description } = req.body;
  try {
    const updatedItem = await dbService.updateGenre(id, name, description);
    if (updatedItem.length > 0) {
      res.status(200).json(updatedItem[0]);
    } else {
      res.status(404).json({ message: "Genre not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error updating genre", error: error.message });
  }
};

const deleteGenre = async (req, res) => {
  const { id } = req.params;
  try {
    await dbService.deleteGenre(id);
    res.status(204).send();
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
