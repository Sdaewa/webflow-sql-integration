const Webflow = require("webflow-api");
require("dotenv").config();

const WEBFLOW_API_TOKEN = process.env.WEBFLOW_API_TOKEN;

const webflow = new Webflow({ token: WEBFLOW_API_TOKEN });

const createItem = async (collectionId, itemData) => {
  try {
    return await webflow.createItem({
      collectionId: collectionId,
      fields: itemData,
    });
  } catch (error) {
    throw error;
  }
};

const getItems = async (collectionId) => {
  try {
    return await webflow.items({ collectionId: collectionId });
  } catch (error) {
    throw error;
  }
};

const getItemById = async (collectionId, itemId) => {
  try {
    return await webflow.item({ collectionId: collectionId, itemId: itemId });
  } catch (error) {
    throw error;
  }
};

const updateItem = async (collectionId, itemId, itemData) => {
  try {
    return await webflow.updateItem({
      collectionId: collectionId,
      itemId: itemId,
      fields: itemData,
    });
  } catch (error) {
    throw error;
  }
};

const deleteItem = async (collectionId, itemId) => {
  try {
    return await webflow.removeItem({
      collectionId: collectionId,
      itemId: itemId,
    });
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createItem,
  getItems,
  getItemById,
  updateItem,
  deleteItem,
};
