const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Posts extends Model {}

Posts.init(
    {
      // define columns
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      
      post_title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      post_body: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references:{
          model:'user',
          key: 'id',
        },
      },

      // comment_id: {
      //   type: DataTypes.INTEGER,
      //   allowNull: true,
      //   references:{
      //     model:'comments',
      //     key: 'id',
      //   },
      // },
      created_on: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: new Date(),
      },
      updated_on: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: new Date()
      },
     
     
    },
    {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'posts',
    }
  );
  
  module.exports = Posts;
  