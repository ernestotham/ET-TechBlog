
const router = require('express').Router();
const { Comments } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newComment = await Comments.create({
      post_id: req.body.post_id,
      comments_body: req.body.comment_body,
      user_id: req.session.user_id,
    });

    res.redirect(`/post/${newComment.post_id}`);
  } catch (err) {
    res.status(400).json(err);
  }
});


module.exports = router;