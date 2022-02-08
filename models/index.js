// import models
const Users = require('./Users');
const Posts = require('./Posts');
const Comments = require('./Comments');

Posts.belongsTo(Users, {
  foreignKey: 'user_id',
    define: {
    underscored: true
  }

});

Comments.belongsTo(Users, {
    foreignKey: 'user_id',
    define: {
      underscored: true
    }
  
  });

  Comments.belongsTo(Posts, {
    foreignKey: 'post_id',
    define: {
      underscored: true
    }
  
  });

Users.hasMany(Posts, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
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
