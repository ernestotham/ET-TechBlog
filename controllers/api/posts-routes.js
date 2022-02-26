const router = require('express').Router();
const { Posts } = require('../../models');
const withAuth = require('../../utils/auth');



router.post('/', withAuth, async (req, res) => {
  try {
    const newPost = await Posts.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newPost);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const postDataItem = await Posts.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!postDataItem) {
      res.status(404).json({ message: 'No project found with this id!' });
      return;
    }

    res.status(200).json(postDataItem);
  } catch (err) {
    res.status(500).json(err);
  }
});



router.put('/:id', withAuth, async (req, res) => {
  try {
    const postDataItem = await Posts.update(
      
      {
        post_title: req.body.postTittle,
        post_body: req.body.postBody,
        // user_id: req.session.user_id,
      },
    {
      where: {
        id: req.params.id,
      },
    });

    if (!postDataItem) {
      res.status(404).json({ message: 'No project found with this id!' });
      return;
    }

    res.status(200).json(postDataItem);
  } catch (err) {
    res.status(500).json(err);
  }
});



module.exports = router;