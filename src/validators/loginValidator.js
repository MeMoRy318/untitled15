import Joi from "joi";

const loginValidator = Joi.object({
    email:Joi.string().regex(/^([a-zA-Z0-9_-]+\.)*[a-zA-Z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-zA-Z]{2,6}$/).required().messages({
        'string.pattern.base':'email некоректний',
        'string.empty':'Поле пусте'
    }),
    password:Joi.string().regex(/(?=.*[a-z])[0-9a-zA-Z!@#$%^&*]{8,}/).required().messages({
        'string.pattern.base':'Пароль має бути не менше 8 символів',
        'string.empty':'Поле пусте'
    })

})

export {loginValidator};
