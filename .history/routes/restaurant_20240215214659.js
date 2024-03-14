const router = require('express').Router();
const restaurantController = require('../controllers/restaurantController');

router.post("/", restaurantController.addRestaurant);

router.get("/:code", restaurantController.getRandomRestaurants);

router.get("/:code", restaurantController.getAllNearByRestaurants);

router.get("/:code", restaurantController.getRandomRestaurants);

module.exports = router;