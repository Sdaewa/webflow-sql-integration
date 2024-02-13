const dbService = require("../services/dbService");

const addMember = async (req, res) => {
  try {
    const { name, email } = req.body;
    const newItem = await dbService.addMember(name, email);
    res.status(201).json(newItem);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error adding member", error: error.message });
  }
};

const getMembers = async (req, res) => {
  try {
    const items = await dbService.getAllMembers();
    res.status(200).json(items);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching members", error: error.message });
  }
};

const getMemberById = async (req, res) => {
  const { id } = req.params;
  try {
    const item = await dbService.getMemberById(id);
    if (item.length > 0) {
      res.status(200).json(item[0]);
    } else {
      res.status(404).json({ message: "Member not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching member", error: error.message });
  }
};

const updateMember = async (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;
  try {
    const updatedItem = await dbService.updateMember(id, name, email);
    if (updatedItem.length > 0) {
      res.status(200).json(updatedItem[0]);
    } else {
      res.status(404).json({ message: "Member not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error updating member", error: error.message });
  }
};

const deleteMember = async (req, res) => {
  const { id } = req.params;
  try {
    await dbService.deleteMember(id);
    res.status(204).send();
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error deleting member", error: error.message });
  }
};

module.exports = {
  addMember,
  getMembers,
  getMemberById,
  updateMember,
  deleteMember,
};
