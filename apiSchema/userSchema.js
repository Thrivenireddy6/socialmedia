const Joi=require('joi')

module.exports.create= Joi.object().keys({
    order_id:Joi.string().required(),
    item_name:Joi.string().required(),
    cost:Joi.string().required(),
    order_date:Joi.string().required(),
    delivery_date:Joi.string().required()
});


module.exports.update= Joi.object().keys({
    order_id:Joi.string().required(),
    item_name:Joi.string().required(),
    cost:Joi.string().required(),
    order_date:Joi.string().required(),
    delivery_date:Joi.string().required()
});


module.exports.delete= Joi.object().keys({
    email:Joi.string().email().required()
});
module.exports.search= Joi.object().keys({
    order_id:Joi.string().required()
});