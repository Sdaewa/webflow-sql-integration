const db = require("../db");

const executeQuery = async (query, params) => {
  console.log("query", query);
  try {
    const { rows } = await db.query(query, params);
    return rows;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Artists

const addArtist = (name, bio) =>
  executeQuery("INSERT INTO artists(name, bio) VALUES($1, $2) RETURNING *", [
    name,
    bio,
  ]);

const getAllArtists = () => executeQuery("SELECT * FROM artists", []);

const getArtistById = (item_id) =>
  executeQuery("SELECT * FROM artists WHERE item_id = $1", [item_id]);

const updateArtist = (item_id, name, bio) =>
  executeQuery(
    "UPDATE artists SET name = $2, bio = $3 WHERE item_id = $1 RETURNING *",
    [item_id, name, bio]
  );

const deleteArtist = (item_id) =>
  executeQuery("DELETE FROM artists WHERE item_id = $1", [item_id]);

// Events

const addEvent = (title, description, date) =>
  executeQuery(
    "INSERT INTO events(title, description, event_date) VALUES($1, $2, $3) RETURNING *",
    [title, description, date]
  );

const getAllEvents = () => executeQuery("SELECT * FROM events", []);

const getEventById = (id) =>
  executeQuery("SELECT * FROM events WHERE id = $1", [id]);

const updateEvent = (id, title, description, date) =>
  executeQuery(
    "UPDATE events SET title = $2, description = $3, event_date = $4 WHERE id = $1 RETURNING *",
    [id, title, description, date]
  );

const deleteEvent = (id) =>
  executeQuery("DELETE FROM events WHERE id = $1", [id]);

// Venues

const addVenue = (name, location) =>
  executeQuery(
    "INSERT INTO venues(name, location) VALUES($1, $2) RETURNING *",
    [name, location]
  );

const getAllVenues = () => executeQuery("SELECT * FROM venues", []);

const getVenueById = (item_id) =>
  executeQuery("SELECT * FROM venues WHERE item_id = $1", [item_id]);

const updateVenue = (item_id, name, location) =>
  executeQuery(
    "UPDATE venues SET name = $2, location = $3 WHERE item_id = $1 RETURNING *",
    [item_id, name, location]
  );

const deleteVenue = (item_id) =>
  executeQuery("DELETE FROM venues WHERE item_id = $1", [item_id]);

// Genres

const addGenre = (name, description) =>
  executeQuery(
    "INSERT INTO genres(name, description) VALUES($1, $2) RETURNING *",
    [name, description]
  );

const getAllGenres = () => executeQuery("SELECT * FROM genres", []);

const getGenreById = (id) =>
  executeQuery("SELECT * FROM genres WHERE id = $1", [id]);

const updateGenre = (id, name, description) =>
  executeQuery(
    "UPDATE genres SET name = $2, description = $3 WHERE id = $1 RETURNING *",
    [id, name, description]
  );

const deleteGenre = (id) =>
  executeQuery("DELETE FROM genres WHERE id = $1", [id]);

module.exports = {
  addArtist,
  getAllArtists,
  getArtistById,
  updateArtist,
  deleteArtist,
  addEvent,
  getAllEvents,
  getEventById,
  updateEvent,
  deleteEvent,
  addVenue,
  getAllVenues,
  getVenueById,
  updateVenue,
  deleteVenue,
  addGenre,
  getAllGenres,
  getGenreById,
  updateGenre,
  deleteGenre,
};
