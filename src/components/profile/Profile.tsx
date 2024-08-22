import Table from 'react-bootstrap/Table';
import './Profile.scss'
import logo from '../../assets/logo.png'
import Pagination from './Pagination';
import { useEffect, useState } from 'react';
import { deletePost, getPosts, getTags, logout } from '../../services/ApiService';
import { FaPen } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import ModalAddNewPost from './ModalAddNewPost';
import ModalUpdatePost from './ModalUpdatePost';
import { toast } from 'react-toastify';

type tag = {
    tag: string
}

export type listPosts = {
    id: string,
    title: string,
    description: string,
    tags: tag[]
}


const Profile = () => {
    const [posts, setPosts] = useState<listPosts[]>([])
    const [totalPage, setTotalPage] = useState(0)
    const [currentPage, setCurrentPage] = useState(1)
    const [title, setTitle] = useState('')
    const [tags, setTags] = useState([]);
    const [selectTag, setSelecctTag] = useState('')
    const [showModaAddNew, setShowModalAddNew] = useState(false)
    const [showModaUpdate, setShowModalUpdate] = useState(false)
    const [postData, setPostData] = useState<listPosts | null>(null)


    useEffect(() => {
        getPostsByPage();
        getListTags();
    }, [currentPage])

    const getPostsByPage = async () => {
        const res = await getPosts(currentPage);
        if (res && res.data && res.data.posts) {
            setPosts(res.data.posts);
            setTotalPage(res.data.total_page)
        }
    }

    const getListTags = async () => {
        const res = await getTags();
        if (res && res.data) {
            setTags(res.data)
        }
    }


    const handleUpdatePost = (post: listPosts) => {
        setPostData(post);
        setShowModalUpdate(true);
    }

    const handleDeletePost = async (post: listPosts) => {
        if (window.confirm(`You Want Delete Posts Title: ${post.title}`)) {
            const res = await deletePost(post.id);
            if (res && res.data) {
                toast.success('Delete Successfully');
                getPostsByPage();
            } else {
                toast.error("Delete Failure");
            }

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
                    <a onClick={async () => await logout()} href="">Logout</a>
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
                                    .filter((post) => post.tags.map(tag => tag.tag === selectTag))
                                    .map((post, index) =>
                                        <tr key={index}>
                                            <td>{post.id}</td>
                                            <td>{post.title}</td>
                                            <td>{post.description}</td>
                                            <td>{Array.isArray(post.tags) ? post.tags.map(tag => tag.tag).join(', ') : post.tags}</td>
                                            <td>
                                                <div className='action'>
                                                    <FaPen onClick={() => handleUpdatePost(post)} size={20} />
                                                    <MdDelete onClick={() => handleDeletePost(post)} size={20} />
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
                getPostsByPage={getPostsByPage}
            />
            <ModalUpdatePost
                tags={tags}
                show={showModaUpdate}
                setShowModalAddNew={setShowModalUpdate}
                getPostsByPage={getPostsByPage}
                postData={postData}

            />
        </div>
    );
};

export default Profile;