const {MyMail}=require('../descriptionDB');

class messageController{

    async getAllMessage(req, res, next){
        try{ 
            let infoAbMessage=await MyMail.findAll({attributes:['id', 'nameSender', 'nameReceivers', 'topic', 'message']});
            return res.json({info:infoAbMessage});
        }catch(e){
            return res.status(500).json({message:'Something went wrong, please try again'});
        }
    } 

    async getMessage(req, res, next){
            try{ 
            let {name}=req.query
            console.log(name)
              let messages=await MyMail.findAll({where:{nameSender:name}});
            if(!name){
                return next(ApiError.badRequest('Unable to find user'));
            }
            return res.json({message:messages});  
        }catch(e){
            return res.status(500).json({message:'Something went wrong, please try again'});
        }  
    }
}

module.exports=new messageController();