import {useDispatch} from "react-redux";
import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import {joiResolver} from "@hookform/resolvers/joi";

import css from './RegisterForm.module.css';
import {authAction} from "../../redux/slices";
import {registerValidator} from "../../validators";



const RegisterForm = () => {


    const {reset,register,handleSubmit,formState:{errors,isValid}} = useForm({mode:"onBlur",resolver:joiResolver(registerValidator)});
    const navigate = useNavigate();
    const dispatch = useDispatch();


    const submit = (data) => {
        dispatch(authAction.registerUser(data));
        navigate('/login',{state:data})
        reset()
    };


    return (

        <div className={css.registerForm}>
            <div className={css.registerForm__content}>

                <div className={css.registerForm__title}>Register</div>

                <form onSubmit={handleSubmit(submit)}>
                    <div className={css.registerForm__row}>

                        <label className={css.registerForm__inputBox}>
                            <span>Name</span>
                            <input type="text" placeholder={'Name'} {...register('name')}
                                   className={`${css.registerForm__input} ${errors?.name && css.active}`}/>
                            <div className={ css.registerForm__errors}>{errors?.name && errors?.name?.message}</div>
                        </label>

                        <label className={css.registerForm__inputBox}>
                            <span>Surname</span>
                            <input type="text" placeholder={'Surname'} {...register('surname')}
                                   className={`${css.registerForm__input} ${errors?.surname && css.active}`}/>
                            <div className={ css.registerForm__errors}>{errors?.surname && errors?.surname?.message}</div>
                        </label>
                    </div>

                    <label className={css.registerForm__inputBox}>
                        <span>Email</span>
                        <input type="text" placeholder={'Email'} {...register('email')}
                               className={`${css.registerForm__input} ${errors?.email && css.active}`}/>
                        <div className={ css.registerForm__errors}>{errors?.email && errors?.email?.message}</div>
                    </label>

                    <label className={css.registerForm__inputBox}>
                        <span>Password</span>
                        <input type="password" placeholder={'Password'} {...register('password')}
                               className={`${css.registerForm__input} ${errors?.password && css.active}`}/>
                        <div className={css.registerForm__errors}>{errors?.password && errors?.password?.message}</div>
                    </label>

                    <button className={css.registerForm__btn} disabled={!isValid}>Register</button>

                </form>

                <div className={css.registerForm__link}>Есть аккаунт? <span onClick={()=>navigate('/login')}>Войти</span></div>

            </div>
        </div>
    );
};

export {RegisterForm};