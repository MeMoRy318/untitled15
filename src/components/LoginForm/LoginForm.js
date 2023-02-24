import {useEffect} from "react";
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {useLocation, useNavigate} from "react-router-dom";
import {joiResolver} from "@hookform/resolvers/joi";

import {loginValidator} from "../../validators";
import {authAction} from "../../redux/slices";
import css from './LoginForm.module.css'


const LoginForm = () => {


    const {register,handleSubmit,reset,formState:{errors,isValid},setValue} = useForm({mode:"onBlur",resolver:joiResolver(loginValidator)});
    const {user} = useSelector(state => state.authReducer);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {state} = useLocation();


    useEffect(()=>{
        if (state){
            setValue('email',state.email, {shouldValidate:true})
            setValue('password',state.password,{shouldValidate:true})
        }
    },[state,setValue])


    const submit = async (data) => {
        if (user.email === data.email){
            await dispatch(authAction.loginUser());
            navigate('/');
        }
        reset()
    };


    return (
        <div>
            <div className={css.loginForm}>
                <div className={css.loginForm__content}>
                    <div className={css.loginForm__title}>Login</div>
                    <form onSubmit={handleSubmit(submit)}>

                        <label className={css.loginForm__inputBox}>
                            <span>Email</span>
                            <input type="text" placeholder={'Email'} {...register('email')}
                                   className={`${css.loginForm__input} ${errors?.email && css.active}`}/>
                            <div className={ css.loginForm__errors}>{errors?.email && errors?.email?.message}</div>
                        </label>

                        <label className={css.loginForm__inputBox}>
                            <span>Password</span>
                            <input type="password" placeholder={'Password'} {...register('password')}
                                   className={`${css.loginForm__input} ${errors?.password && css.active}`}/>
                            <div className={css.loginForm__errors}>{errors?.password && errors?.password?.message}</div>
                        </label>

                        <button className={css.loginForm__btn} disabled={!isValid}>Login</button>

                    </form>
                    <div className={css.loginForm__link}>Нема аккаунта? <span onClick={()=>navigate('/register')}>Зарегистрироваться</span></div>
                </div>
            </div>
        </div>
    );
};

export {LoginForm};