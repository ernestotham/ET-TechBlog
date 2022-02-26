const router = require('express').Router();
const userRoutes = require('./users-routes');
const postRoutes = require('./posts-routes');
const commRoutes = require('./comments-routes');


router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/comms', commRoutes);


module.exports = router;
