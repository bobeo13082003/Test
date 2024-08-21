import bn1 from '../../assets/banner1.png'
import './Section.scss'
const SectionOne = () => {
    return (
        <div className="sectionone row">
            <div className="sectionone__title col-xl-6 col-sm-12 ">
                <h1>Save your data storage here.</h1>
                <p>
                    Data Warehouse is a data storage area that has been tested for security, so you can store your data here safely but not be afraid of being stolen by others.
                </p>
                <button className='sectionone__button'>Learn more</button>
            </div>
            <div className="sectionone__image col-xl-6 col-sm-12">
                <img src={bn1} alt='Banner1' />
            </div>
        </div>
    );
};

export default SectionOne;