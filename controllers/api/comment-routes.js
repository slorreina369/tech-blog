const router = require('express').Router();
const {Comment, Post, User} = require('../../models');
const sequelize = require('../../config/connection');

router.get('/', (req,res) =>{
    Comment.findAll({
      order: [['created_at', 'DESC']],
      attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
      include: {
        model: User,
        attributes: ['username']
        }
    })
    .then(dbCommentData => res.json(dbCommentData))
    .catch(err =>{
    console.log(err);
    res.status(500).json(err);
    })
});

router.get('/:id', (req,res) =>{
  Comment.findOne({
    order: [['created_at', 'DESC']],
    attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
    include: {
      model: User,
      attributes: ['username']
      }
  })
    .then(dbCommentData => res.json(dbCommentData))
    .catch(err =>{
    console.log(err);
    res.status(500).json(err);
    })
});

router.post('/', (req,res) =>{
    Comment.create({
        comment_text:req.body.comment_text,
        user_id:req.session.user_id,
        post_id:req.body.post_id
    })
    .then(dbCommentData => res.json(dbCommentData))
    .catch(err =>{
        console.log(err);
        res.status(400).json(err);
    });
});

router.put('/:id', (req,res) =>{
  Comment.update(
      {
        comment_text:req.body.comment_text
      },
      {
        where:{
            id:req.params.id
        }
      }
  )
  .then(dbCommentData =>{
      if(!dbCommentData){
          res.status(404).json({message:'No comment found with this id'});
          return;
      }
      res.json(dbCommentData);
  })
  .catch(err=>{
      console.log(err);
      res.status(500).json(err)
  });
});

router.delete('/:id', (req,res) =>{});

module.exports = router;