const express = require('express');
const router = express.Router();

const {getGoals, setGoal, getGoal, updateGoal, deleteGoal} = require('../controllers/goalController')

router.route('/').get(getGoals).post(setGoal)
router.route('/:id').get(getGoal).delete(deleteGoal).put(updateGoal)

// router.get('/', getGoals)

// router.post('/', setGoal)

// router.get('/:id', getGoal)

// router.put('/:id', updateGoal)

// router.delete('/:id', deleteGoal)

module.exports = router