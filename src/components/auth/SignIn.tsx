import { Button } from 'react-bootstrap';
import logo from '../../assets/logo.png'
import './SignIn.scss'
import { useNavigate } from 'react-router';

const SignIn = () => {
    const navigate = useNavigate();

    return (
        <div className='signin container'>
            <div className='mt-2'>
                <img src={logo} alt="Logo" />
            </div>
            <div className='signin__form'>
                <h2>Sign In</h2>
                <div className='signin__input'>
                    <span>Username</span>
                    <input type="text" />
                </div>
                <button className='signin__button'>Sign In</button>
            </div>
            <div className='text-center mt-3'>
                <Button onClick={() => navigate('/')}>Home</Button>
            </div>
        </div>
    );
};

export default SignIn;