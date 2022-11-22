const {Router}=require('express');
const messageRouter=new Router();
const messageController=require('../controllers/messageController');

messageRouter.get('/', messageController.getAllMessage);
messageRouter.get('/getmes', messageController.getMessage);

module.exports=messageRouter;