import Joi from "joi";


const registerValidator = Joi.object({

    email:Joi.string().regex(/^([a-zA-Z0-9_-]+\.)*[a-zA-Z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-zA-Z]{2,6}$/).required().messages({
        'string.pattern.base':'email некоректний',
        'string.empty':'Поле пусте'
    }),

    password:Joi.string().regex(/(?=.*[a-zA-Z0-9])[0-9a-zA-Z!@#$%^&*]{8,}/).required().messages({
        'string.pattern.base':'Пароль має бути не менше 8 символів',
        'string.empty':'Поле пусте'
    }),

    name:Joi.string().regex(/(?=.*[a-zA-Z0-9])[0-9a-zA-Z!@#$%^&*]{3,}/).required().messages({
        'string.pattern.base':'Имя має бути не менше 3 символів',
        'string.empty':'Поле пусте'
    }),
    surname:Joi.string().regex(/(?=.*[a-zA-Z0-9])[0-9a-zA-Z!@#$%^&*]{3,}/).required().messages({
        'string.pattern.base':'Фамилия має бути не менше 3 символів',
        'string.empty':'Поле пусте'
    }),

});

export {registerValidator};