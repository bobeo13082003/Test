// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import av1 from '../../assets/avatar1.png'
import av2 from '../../assets/avatar2.png'
import av3 from '../../assets/avatar3.png'

import './Section.scss'
const SectionFour = () => {
    return (
        <div className="sectionfour container">
            <div className="sectionfour__title">
                <h2>Testimonials</h2>
            </div>
            <div className="sectionfour__swipper">
                <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
                    <SwiperSlide>
                        <div className='sectionfour__swipper__item'>
                            <div className='sectionfour__swipper__image'>
                                <img src={av1} alt='Avatar1' />
                            </div>
                            <div className='sectionfour__swipper__content'>
                                <div className='name'>John Fang</div>
                                <p className='contact'>wordfaang.com</p>
                                <p className='detail'>Suspendisse ultrices at diam lectus nullam.
                                    Nisl, sagittis viverra enim erat tortor ultricies
                                    massa turpis. Arcu pulvinar aenean nam laoreet nulla. </p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='sectionfour__swipper__item'>
                            <div className='sectionfour__swipper__image'>
                                <img src={av2} alt='Avatar2' />
                            </div>
                            <div className='sectionfour__swipper__content'>
                                <div className='name'>Jane Doe</div>
                                <p className='contact'>janedoee.com</p>
                                <p className='detail'>Suspendisse ultrices at diam lectus nullam.
                                    Nisl, sagittis viverra enim erat tortor ultricies
                                    massa turpis. Arcu pulvinar aenean nam laoreet nulla. </p>
                            </div>
                        </div>

                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='sectionfour__swipper__item'>
                            <div className='sectionfour__swipper__image'>
                                <img src={av3} alt='Avatar3' />
                            </div>
                            <div className='sectionfour__swipper__content'>
                                <div className='name'>Jim Ferry</div>
                                <p className='contact'>jimjimf.com</p>
                                <p className='detail'>Suspendisse ultrices at diam lectus nullam.
                                    Nisl, sagittis viverra enim erat tortor ultricies
                                    massa turpis. Arcu pulvinar aenean nam laoreet nulla. </p>
                            </div>
                        </div>

                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default SectionFour;