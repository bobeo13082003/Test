import bg1 from '../../assets/bg1.png'
import bg2 from '../../assets/bg2.png'
import bg3 from '../../assets/bg3.png'
import bg4 from '../../assets/bg4.png'
import bn3 from '../../assets/banner3.png'
import bn4 from '../../assets/banner4.png'
import bn5 from '../../assets/banner5.png'
import bn6 from '../../assets/banner6.png'




import { GrLinkNext } from "react-icons/gr";
import './Section.scss'
const SectionThree = () => {
    return (
        <div className="sectionthree">
            <div className="text-center sectionthree__title">
                <h2>Features</h2>
                <p>Some of the features and advantages that we provide for those
                    of you who store data in this Data Warehouse.</p>
            </div>
            <div className="sectionthree__body container">
                <div className='row'>
                    <div className="sectionthree__item col-xl-5 col-lg-12 mb-4">
                        <div className="sectionthree__item__bg">
                            <img src={bg1} alt='background1' />
                        </div>
                        <div className="sectionthree__item__image">
                            <img src={bn3} alt='banner3' />
                        </div>
                        <div className="sectionthree__item__content">
                            <h3>Search Data</h3>
                            <p>Don’t worry if your data is very large, the Data Warehouse provides a search engine, which is useful
                                for making it easier to find data effectively saving time.</p>
                            <div>
                                <a href='#' className='sectionthree__item__link fw-bold'>Learn more</a>
                                <GrLinkNext className='mx-2 icon' />
                            </div>
                        </div>
                    </div>
                    <div className='sectionthree__item col-xl-5 col-lg-12 mb-4'>
                        <div className="sectionthree__item__bg">
                            <img src={bg2} alt='background2' />
                        </div>
                        <div className="sectionthree__item__image">
                            <img src={bn4} alt='banner4' />
                        </div>
                        <div className="sectionthree__item__content">
                            <h3>24 Hours Access</h3>
                            <p>Access is given 24 hours a full morning to night and meet again in the morning,
                                giving you comfort when you need data when urgent..</p>
                            <div>
                                <a href='#' className='sectionthree__item__link fw-bold'>Learn more</a>
                                <GrLinkNext className='mx-2' />
                            </div>
                        </div>
                    </div>
                    <div className="sectionthree__item col-xl-5 col-lg-12 mb-4">
                        <div className="sectionthree__item__bg">
                            <img src={bg3} alt='background1' />
                        </div>
                        <div className="sectionthree__item__image">
                            <img src={bn5} alt='banner3' />
                        </div>
                        <div className="sectionthree__item__content">
                            <h3>Print Out</h3>
                            <p>Print out service gives you convenience if someday you need
                                print data, just edit it all and just print it.</p>
                            <div>
                                <a href='#' className='sectionthree__item__link fw-bold'>Learn more</a>
                                <GrLinkNext className='mx-2 icon' />
                            </div>
                        </div>
                    </div>
                    <div className='sectionthree__item col-xl-5 col-lg-12 mb-4'>
                        <div className="sectionthree__item__bg">
                            <img src={bg4} alt='background2' />
                        </div>
                        <div className="sectionthree__item__image">
                            <img src={bn6} alt='banner4' />
                        </div>
                        <div className="sectionthree__item__content">
                            <h3>Security Code</h3>
                            <p>Data Security is one of our best facilities. Allows for your files to be safer. The file can be secured with a code or password
                                than you created, so only you can open the file.</p>
                            <div>
                                <a href='#' className='sectionthree__item__link fw-bold'>Learn more</a>
                                <GrLinkNext className='mx-2' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SectionThree;