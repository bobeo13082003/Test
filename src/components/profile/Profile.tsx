import Table from 'react-bootstrap/Table';
import './Profile.scss'
import logo from '../../assets/logo.png'
import Pagination from './Pagination';
import { useEffect, useState } from 'react';
import { GetPosts, GetTags } from '../../services/ApiService';
import { FaPen } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import ModalAddNewPost from './ModalAddNewPost';
type listPosts = {
    id: string,
    title: string,
    description: string,
    tags: string[]
}

const Profile = () => {
    const [posts, setPosts] = useState<listPosts[]>([])
    const [totalPage, setTotalPage] = useState(0)
    const [currentPage, setCurrentPage] = useState(0)
    const [title, setTitle] = useState('')
    const [tags, setTags] = useState([]);
    const [selectTag, setSelecctTag] = useState('')
    const [showModaAddNew, setShowModalAddNew] = useState(false)

    useEffect(() => {
        getPostsByPage();
        getListTags();
    }, [currentPage, title, selectTag])

    const getPostsByPage = async () => {
        const res = await GetPosts(currentPage, title, selectTag);
        if (res && res.data && res.data.posts) {
            setPosts(res.data.posts);
            setTotalPage(res.data.total_page)
        }
    }

    const getListTags = async () => {
        const res = await GetTags();
        if (res && res.data) {
            setTags(res.data)
        }
    }
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
                    <button onClick={() => setShowModalAddNew(true)}>Add new</button>
                    <div className='profile__content__input'>
                        <input type="text" onChange={e => setTitle(e.target.value)} placeholder='Title' />
                        <select onChange={e => setSelecctTag(e.target.value)}>
                            <option value="">Tags</option>
                            {
                                tags.map((tag, index) =>
                                    <option value={tag} key={index}>{tag}</option>
                                )
                            }
                        </select>
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
                            {
                                posts
                                    .filter((post) => post.title.includes(title))
                                    .filter((post) => selectTag ? (Array.isArray(post.tags) ? post.tags.map(tag => tag === selectTag) : (post.tags === selectTag)) : post)
                                    .map((post) =>
                                        <tr key={post.id}>
                                            <td>{post.id}</td>
                                            <td>{post.title}</td>
                                            <td>{post.description}</td>
                                            <td>{Array.isArray(post.tags) ? post.tags.map(tag => tag).join(', ') : post.tags}</td>
                                            <td>
                                                <div className='action'>
                                                    <FaPen size={20} />
                                                    <MdDelete size={20} />
                                                </div>
                                            </td>

                                        </tr>
                                    )
                            }

                        </tbody>
                    </Table>
                </div>
                <Pagination
                    totalPage={totalPage}
                    setCurrentPage={setCurrentPage}
                />
            </div>
            <ModalAddNewPost
                tags={tags}
                show={showModaAddNew}
                setShowModalAddNew={setShowModalAddNew}
            />
        </div>
    );
};

export default Profile;