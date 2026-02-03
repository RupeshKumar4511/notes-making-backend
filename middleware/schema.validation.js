import {validationResult} from 'express-validator'

const validateSchema = async(req,res,next)=>{
    const errors = validationResult(req.body);
    if(!errors.isEmpty()){
        return res.status(400).send({
            success:false,
            errors:errors.array()
        })
    }

    next()
}

export default validateSchema;