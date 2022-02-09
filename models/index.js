// import models
const User = require('./User');
const Posts = require('./Posts');
const Comments = require('./Comments');

Posts.belongsTo(User, {
  foreignKey: 'user_id',
    define: {
    underscored: true
  }

});

Comments.belongsTo(User, {
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

User.hasMany(Posts, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
  define: {
    underscored: true
  }
  });



// Posts.belongsToMany(Comments,{ 
//   foreignKey: 'comments_id',
//   define: {
//     underscored: true
//   }

// });


module.exports = {
  User,
  Posts,
  Comments,
};
