import './Footer.scss'
import logo from '../../assets/Logo2.png'
import { AiOutlineYoutube } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io";
import { IoChatbubbleEllipsesSharp } from "react-icons/io5";
const Footer = () => {
    return (
        <div className="footer container">
            <div className="footer__item row">
                <div className="footer__item__one col-xl-3 col-lg-12">
                    <img src={logo} alt='Logo' />
                    <div className='title'>Warehouse Society, 234 Bahagia Ave Street PRBW 29281</div>
                    <div>info@warehouse.project
                        <br />
                        1-232-3434 (Main)
                    </div>
                </div>
                <div className='footer__item__right col-xl-7 col-lg-12 row'>
                    <div className="footer__item__two col-xl-4 col-lg-12">
                        <div className='title'>About</div>
                        <a href="#">Profile</a>
                        <a href="#">Features</a>
                        <a href="#">Careers</a>
                        <a href="#">DW News</a>
                    </div>
                    <div className="footer__item__three col-xl-4 col-lg-12">
                        <div className='title'>Help</div>
                        <a href="#">Support</a>
                        <a href="#">Sign Up</a>
                        <a href="#">Guide</a>
                        <a href="#">Reports</a>
                        <a href="#">Q & A</a>

                    </div>
                    <div className="footer__item__four col-xl-4 col-lg-12">
                        <div className='title'>Social Media</div>
                        <ul>
                            <li><AiOutlineYoutube size={21} /></li>
                            <li><FaInstagram size={21} /></li>
                            <li><IoLogoGithub size={21} /></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer__end">
                <div className="footer__end__content">
                    © Datawarehouse™, 2020. All rights reserved.
                    <br />Company Registration Number: 21479524.
                </div>
                <div className="footer__end__chat">
                    <IoChatbubbleEllipsesSharp size={30} />
                </div>
            </div>
        </div>
    );
};

export default Footer;