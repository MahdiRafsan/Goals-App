const express = require('express');
const router = express.Router();

const { getGoals, setGoal, getGoal, updateGoal, deleteGoal } = require('../controllers/goalController')
const { protect } = require('../middleware/authMiddleware')

router.route('/').get(protect, getGoals).post(protect, setGoal)
router.route('/:id').get(protect, getGoal).delete(protect, deleteGoal).put(protect, updateGoal)

// router.get('/', protect, getGoals)

// router.post('/', protect, setGoal)

// router.get('/:id', protect, getGoal)

// router.put('/:id', protect, updateGoal)

// router.delete('/:id', protect, deleteGoal)

module.exports = router