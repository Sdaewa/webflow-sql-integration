const express = require("express");
const router = express.Router();

const artistsController = require("../controllers/artistsController");
const genresController = require("../controllers/genresController");
const venuesController = require("../controllers/venuesController");
const eventsController = require("../controllers/eventsController");
const membersController = require("../controllers/membersController");
const blogPostsController = require("../controllers/blogPostsController");
const blogTracksController = require("../controllers/blogTracksController");

// Artist Routes
router.post("/artists", artistsController.addArtist);
router.get("/artists", artistsController.getArtists);
router.get("/artists/:id", artistsController.getArtistById);
router.put("/artists/:id", artistsController.updateArtist);
router.delete("/artists/:id", artistsController.deleteArtist);

// Genre Routes
router.post("/genres", genresController.addGenre);
router.get("/genres", genresController.getGenres);
router.get("/genres/:id", genresController.getGenreById);
router.put("/genres/:id", genresController.updateGenre);
router.delete("/genres/:id", genresController.deleteGenre);

// Venue Routes
router.post("/venues", venuesController.addVenue);
router.get("/venues", venuesController.getVenues);
router.get("/venues/:id", venuesController.getVenueById);
router.put("/venues/:id", venuesController.updateVenue);
router.delete("/venues/:id", venuesController.deleteVenue);

// Event Routes
router.post("/events", eventsController.addEvent);
router.get("/events", eventsController.getEvents);
router.get("/events/:id", eventsController.getEventById);
router.put("/events/:id", eventsController.updateEvent);
router.delete("/events/:id", eventsController.deleteEvent);

// Member Routes
router.post("/members", membersController.addMember);
router.get("/members", membersController.getMembers);
router.get("/members/:id", membersController.getMemberById);
router.put("/members/:id", membersController.updateMember);
router.delete("/members/:id", membersController.deleteMember);

// Blog Post Routes
router.post("/blog-posts", blogPostsController.addBlogPost);
router.get("/blog-posts", blogPostsController.getBlogPosts);
router.get("/blog-posts/:id", blogPostsController.getBlogPostById);
router.put("/blog-posts/:id", blogPostsController.updateBlogPost);
router.delete("/blog-posts/:id", blogPostsController.deleteBlogPost);

//  Track Routes
router.post("/tracks", tracksController.addTrack);
router.get("/tracks", tracksController.getTracks);
router.get("/tracks/:id", tracksController.getTrackById);
router.put("/tracks/:id", tracksController.updateTrack);
router.delete("/tracks/:id", tracksController.deleteTrack);

module.exports = router;
