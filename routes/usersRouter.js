const {Router}=require('express');
const usersRouter=new Router();
const usersController=require('../controllers/usersController');


usersRouter.post('/sendMessage', usersController.sendMessage);


module.exports=usersRouter;