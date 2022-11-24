const {MyMail}=require('../descriptionDB');



class messageController{
    

    async getReceiver(req, res, next){
        
         try{
            let {name}=req.query;
            let arrReceiv=[]
            let infoAbMessage=await MyMail.findAll({where:{nameSender:name}});
            infoAbMessage.forEach(el=>{
                arrReceiv.push(el.nameReceivers)
            })
            res.json({receiver:arrReceiv});
            
        }catch(e){
            return res.status(500).json({message:'Something went wrong, please try again'});
        } 
    } 

    async getMessage(req, res, next){
            try{ 
            let {name}=req.query
              let messages=await MyMail.findAll({where:{nameReceivers:name}});
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