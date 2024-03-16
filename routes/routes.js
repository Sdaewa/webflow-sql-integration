const express = require("express");
const router = express.Router();

const artistsController = require("../controllers/artistsController");
const genresController = require("../controllers/genresController");
const venuesController = require("../controllers/venuesController");
const eventsController = require("../controllers/eventsController");

router.post("/artists", artistsController.addArtist);
router.get("/artists", artistsController.getArtists);
router.get("/artists/:id", artistsController.getArtistById);
router.put("/artists/:id", artistsController.updateArtist);
router.delete("/artists/:id", artistsController.deleteArtist);

router.post("/genres", genresController.addGenre);
router.get("/genres", genresController.getGenres);
router.get("/genres/:id", genresController.getGenreById);
router.put("/genres/:id", genresController.updateGenre);
router.delete("/genres/:id", genresController.deleteGenre);

router.post("/venues", venuesController.addVenue);
router.get("/venues", venuesController.getVenues);
router.get("/venues/:id", venuesController.getVenueById);
router.put("/venues/:id", venuesController.updateVenue);
router.delete("/venues/:id", venuesController.deleteVenue);

router.post("/events", eventsController.addEvent);
router.get("/events", eventsController.getEvents);
router.get("/events/:id", eventsController.getEventById);
router.put("/events/:id", eventsController.updateEvent);
router.delete("/events/:id", eventsController.deleteEvent);

module.exports = router;
