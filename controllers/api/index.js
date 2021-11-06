const router = require('express').Router();
const userRoutes = require('./user-routes');
const expenseRoutes = require('./expenseRoutes');
const categoryRoutes = require('./categoryRoutes');
const budgetRoutes = require('../../controllers/api/budgetRoutes');

router.use('/user', userRoutes);
router.use('/expense', expenseRoutes);
router.use('/category', categoryRoutes);
router.use('/budget', budgetRoutes);

const path = require('path');

// router.use('/users', userRoutes);

module.exports = router;
