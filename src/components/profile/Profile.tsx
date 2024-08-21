import Table from 'react-bootstrap/Table';
import './Profile.scss'
import logo from '../../assets/logo.png'

const Profile = () => {

    return (
        <div className='profile row'>
            <div className='profile__navbar col-xl-2 col-lg-12'>
                <div className='text-center'>
                    <img src={logo} alt="Logo" />
                </div>
                <div className='title'>
                    <a href="">Posts</a>
                    <a href="">Logout</a>
                </div>
            </div>
            <div className='profile__content container col-xl-8 col-lg-12'>
                <div className='profile__content__addnew'>
                    <button>Add new</button>
                    <div className='profile__content__input'>
                        <input type="text" name="" placeholder='Title' />
                        <input type="text" name="" placeholder='Tags' />
                    </div>
                </div>
                <div className='profile__content__table'>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Title</th>
                                <th>Description</th>
                                <th>Tags</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                                <td>@fat</td>
                            </tr>

                        </tbody>
                    </Table>
                </div>
            </div>
        </div>
    );
};

export default Profile;