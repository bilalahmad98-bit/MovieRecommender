const joi= require("joi");



const schema=joi.object({
    id:joi.number().integer().min(1).messages({
        "number.base":"Id should be a number",
        "number.integer":"Id should be an integer",
        "number.min":"Id should be greater than 0",
    
    }),
    name:joi.string().min(3).max(30).required().messages({
        "string.base":"Name should be in characters",
        "string.min":"Name should be at least 3 characters long",
        "string.max":"Name should be less than 50 characters",
        "any.required":"Name is required"
    }),
    genre:joi.string().min(3).max(50).required().messages({
        "string.base":"Genre should be in characters",
        "string.min":"Genre should be at least 3 characters long",
        "string.max":"Genre should be less than 50 characters",
        "any.required":"Genre is required"
    }),
    rating:joi.number().precision(1).min(1).max(5).required().messages({
        "number.base":"Rating should be a number",
        // "number.precision":"Rating should be a number with 1 decimal place",
        "number.integer":"Rating should be a number with 1 decimal place",
        "number.min":"Rating should be greater than 0",
        "number.max":"Rating should be less than 5",
        "any.required":"Rating is required"
    }),
})


const updateSchema=joi.object({

id:joi.number().integer().min(1).required().messages({    
    "number.base":"Id should be a number",
    "number.integer":"Id should be an integer",
    "number.min":"Id should be greater than 0",
    "any.required":"Id is required"
}),
name:joi.string().min(3).max(30).messages({  
    
    "string.base":"Name should be in characters",
    "string.min":"Name should be at least 3 characters long",
    "string.max":"Name should be less than 50 characters",
}),
genre:joi.string().min(3).max(50).messages({ 
    "string.base":"Genre should be in characters",
    "string.min":"Genre should be at least 3 characters long",
    "string.max":"Genre should be less than 50 characters",
}),
rating:joi.number().precision(1).min(1).max(5).messages({
    "number.base":"Rating should be a number",
    // "number.precision":"Rating should be a number with 1 decimal place",
    "number.integer":"Rating should be a number with 1 decimal place",
    "number.min":"Rating should be greater than 0",
    "number.max":"Rating should be less than 5",

}),

})








const createValidate=(req,res,next)=>{
    const {error}=schema.validate(req.body,{abortEarly:false,convert:false});
    //to avoid integer conversion
    if(error){
        const errorMessages=error.details.map((item)=>item.message);
        res.status(400).json({
            error:errorMessages
        })
        return;
    }
    next();
}


const updateValidate=(req,res,next)=>{
    const {error}=schema.validate({id:Number(req.params.id),...req.body},{abortEarly:false});

    if(error){
        const errorMessages=error.details.map((item)=>item.message);
        res.status(400).json({
            error:errorMessages
        })
        return;
    }
    next()
}




module.exports= {createValidate,updateValidate}