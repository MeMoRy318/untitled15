import css from './UserInfo.module.css';

import {FaUserCircle} from "react-icons/fa";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {authAction} from "../../redux/slices";


const UserInfo = () => {


    const navigate = useNavigate();
    const {user,isLogin} = useSelector(state => state.authReducer);
    const dispatch = useDispatch();
    console.log(user);


    return (
        <div className={css.userInfo}>
            {
                isLogin ?
                    <div onClick={()=>dispatch(authAction.outUser())} className={css.userInfo__login}>Exit</div>:
                    <div onClick={()=>navigate('/login')} className={css.userInfo__login}>Login</div>
            }
            <div className={isLogin ? css.userInfo__box : css.userInfo__box_}>
                <FaUserCircle className={isLogin ? css.userInfo__icon : css.userInfo__icon_visibility}/>
                <div className={css.userInfo__info}>
                    <div>Name: {user.name}</div>
                    <div>Surname: {user.surname}</div>
                    <div>Email: {user.email}</div>
                    <div>loginTime: {user.loginTime}</div>
                </div>
            </div>
        </div>
    );
};

export {UserInfo};