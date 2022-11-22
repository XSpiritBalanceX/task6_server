const {MyMail}=require('../descriptionDB');
const ApiError=require('../error/ApiError');

class usersController{
    async sendMessage (req, res, next){
        try{
            const {nameSender, nameReceivers, topic, message}= req.body;
            if(!nameSender || !nameReceivers){
                return next(ApiError.badRequest('All data not filled'));
            }  
            await MyMail.create({nameSender, nameReceivers, topic, message, "createdAt":new Date(), "updatedAt":new Date()});
           return res.json({message:'Message has been sent'});
        }catch(e){
            return next(ApiError.internal('Something went wrong, please try again'));
        }
    }

}

module.exports = new usersController();