const express = require("express")
const router = express.Router()
const fruits = require("../controllers/fruitController")

// Get all fruits or get specific fruit
router.get('/', fruits.index)
router.get("/:name", fruits.show)

// Add new fruit
router.post('/', fruits.create)

// Update existing fruit
router.put('/:name', fruits.update)

// Delete fruit
router.delete('/:name', fruits.destroy)

module.exports = router