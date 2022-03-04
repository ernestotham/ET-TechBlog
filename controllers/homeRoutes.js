const router = require('express').Router();
const { Comments, User, Posts } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    // Get all projects and JOIN with user data
    const postData = await Posts.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    // Serialize data so the template can read it
    const posts = postData.map((post) => post.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('techBlog', { 
      posts, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/post/:id', async (req, res) => {
  try {
    const postData = await Posts.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['name']
        },
          
         { model: Comments,
          
        },
      ],
    });

    const commentsData = await Comments.findAll({
      include: [
        {
          model: User,
          attributes: ['name']
        },
          
        ],

      where: {
        post_id: req.params.id,
      },


    });


    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      // include: [{ model: Project }],
    });
    const user = userData.get({ plain: true });

    const post = postData.get({ plain: true });

    const comment = commentsData.map((ecomm)=>ecomm.get({plain: true}))                    

    res.status(200).render('post', {
      post, 
      user,
      comment,
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.render('login');
  }
});

// Use withAuth middleware to prevent access to route
router.get('/post', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      // include: [{ model: Project }],
    });

    
    const user = userData.get({ plain: true });
    const AllPosts = await Posts.findAll();

    res.render('dashboard', {
      AllPosts,
      ...user,
      logged_in: true,
      
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get('/post/modify/:id', async (req, res) => {
  try {
    const postData = await Posts.findByPk(req.params.id, {
      include: [
        {
          model: User,
          // attributes: ['name'],
          model: Comments,
        },
      ],
    });

    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      // include: [{ model: Project }],
    });
    const user = userData.get({ plain: true });

    const post = postData.get({ plain: true });

    res.render('editPost', {
      post, 
      user,
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.render('login');
  }
});



router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/dashboard');
    return;
  }

  res.render('login');
});


router.get('/signup', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('signup');
});


router.get('/addpost', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.render('newpost');
    return;
  }

  res.render('newpost');
});

router.get('/addcomment', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.render('comment');
    return;
  }

  res.render('comment');
});


router.get('/editpost', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.render('editpost');
    return;
  }

  res.render('editpost');
});


router.get('/dashboard', async (req, res) => {
  try {
    // Get all projects and JOIN with user data
    const postData = await Posts.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],

      where: {
        user_id: req.session.user_id,
      },


    });

    // Serialize data so the template can read it
    const posts = postData.map((post) => post.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('dashboard', { 
      posts, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.render('login');
  }
});


module.exports = router;
