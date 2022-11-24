const {Router}=require('express');
const router=new Router();
const usersRouter=require('./usersRouter');
const messageRouter=require('./messageRouter');

router.use('/users', usersRouter)
router.use('/message', messageRouter) 

module.exports=router;