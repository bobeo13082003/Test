import { Button } from 'react-bootstrap';
import logo from '../../assets/logo.png'
import './SignIn.scss'
import { useNavigate } from 'react-router';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { Login } from '../../services/ApiService';
import { useDispatch } from 'react-redux';
import { doLogin } from '../../redux/action/SignInAction';

const SignIn = () => {
    const navigate = useNavigate();
    const [userName, setUserName] = useState('');
    const dispatch = useDispatch();

    useEffect(() => {

    }, [])

    const handleSignIn = async () => {
        if (!userName) {
            toast.error('Username Not Empty!!!')
        } else {
            const res = await Login(userName)
            if (res && res.data && res.data.accessToken) {
                dispatch(doLogin(res.data.accessToken, res.data.refreshToken))
                toast.success('Login Successfully');
                navigate('/')
            } else {
                toast.error('Username Not Exits')
            }
        }
    }

    return (
        <div className='signin container'>
            <div className='mt-2'>
                <img src={logo} alt="Logo" />
            </div>
            <div className='signin__form'>
                <h2>Sign In</h2>
                <div className='signin__input'>
                    <span>Username</span>
                    <input onChange={e => setUserName(e.target.value)} type="text" />
                </div>
                <button onClick={handleSignIn} className='signin__button'>Sign In</button>
            </div>
            <div className='text-center mt-3'>
                <Button onClick={() => navigate('/')}>Home</Button>
            </div>
        </div>
    );
};

export default SignIn;