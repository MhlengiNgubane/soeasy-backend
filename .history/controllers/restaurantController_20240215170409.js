const Restaurant = require('../models/Restaurant');

module.exports = {
    addRestaurant: async (req, res) => {
        try {
            
        } catch (error) {
            
        }
    },

    getRestaurantById: async (req, res) => {
        const id = req.params.id;
        try {
            const restaurant = await Restaurant.findById()
        } catch (error) {
            
        }
    },

    getAllNearByRestaurants: async (req, res) => {
        try {
            
        } catch (error) {
            
        }
    },

    getRandomRestaurants: async (req, res) => {
        try {
            
        } catch (error) {
            
        }
    },
};