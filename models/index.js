// import models
const Users = require('./Users');
const Posts = require('./Posts');
const Comments = require('./Comments');

Posts.belongsTo(Users, {
  define: {
    underscored: true
  }

});

Comments.belongsTo(Users, {
    define: {
      underscored: true
    }
  
  });

Users.hasMany(Posts, {
  define: {
    underscored: true
  }
  });

// Products belongToMany Tags (through ProductTag)

Posts.belongsToMany(Comments,{ 
    define: {
        underscored: true
      }
      });


module.exports = {
  Users,
  Posts,
  Comments,
};
