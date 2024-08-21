import bn2 from '../../assets/banner2.png'
const SectionTwo = () => {
    return (
        <div className="sectiontwo container">
            <div className='sectiontwo__body row'>
                <div className="sectiontwo__image col-xl-6 col-lg-12">
                    <img src={bn2} alt='Banner2' />
                </div>
                <div className="sectiontwo__content col-xl-6 col-lg-12">
                    <h2>We are a high-level data storage bank</h2>
                    <p>The place to store various data that you can access at any time through the internet and where you can carry it. This very flexible storage area has a high level of security. To enter into your own data you must enter the password
                        that you created when you registered in this Data Warehouse.</p>
                </div>
            </div>
        </div>
    );
};

export default SectionTwo;