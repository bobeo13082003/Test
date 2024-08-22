import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './Profile.scss'
import { useEffect, useState } from 'react';
import { listPosts } from './Profile';
import { updatePost } from '../../services/ApiService';
import { toast } from 'react-toastify';


type modalProps = {
    show: boolean,
    setShowModalAddNew: (show: boolean) => void,
    tags: string[],
    getPostsByPage: () => void,
    postData: listPosts | null
}



const ModalUpdatePost = (props: modalProps) => {
    const { show, setShowModalAddNew, tags, getPostsByPage, postData } = props;
    const [selectTags, setSelectTags] = useState<string[] | undefined>([]);
    const [title, setTitle] = useState<string | undefined>('');
    const [description, setDescription] = useState<string | undefined>('');

    const [idPost, setIdPost] = useState<string | undefined>('');

    useEffect(() => {
        setTitle(postData?.title);
        setDescription(postData?.description);
        setSelectTags(postData?.tags.map(tag => tag.tag))
        setIdPost(postData?.id)
    }, [postData])


    const handleClose = () => {
        setShowModalAddNew(false);
        getPostsByPage();
    }

    const handleSelectTags = (e: React.ChangeEvent<HTMLInputElement>) => {
        const tag = e.target.value;
        setSelectTags(prevState =>
            prevState?.includes(tag)
                ? prevState.filter(valu => valu !== tag)
                : [...prevState || '', tag]
        )
    }

    const handleUpdatePost = async () => {
        const res = await updatePost(idPost || '');
        if (res && res.status === 200) {
            toast.success('Update Successfully')
            handleClose();
            getPostsByPage()
        } else {
            toast.error('Update Failure')
        }
    }

    return (
        <div>
            <Modal size='xl' show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Update Posts</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='input'>
                        <div className='input__title'>
                            <label>Title</label>
                            <input value={title} onChange={e => setTitle(e.target.value)} type="text" />
                        </div>
                        <div className='input__description'>
                            <label>Description</label>
                            <textarea value={description} onChange={e => setDescription(e.target.value)} />
                        </div>
                    </div>
                    <label className='mt-5 mb-2'>Tags</label>
                    <div className='selecttag'>
                        {
                            tags.map((tag, index) =>
                                <div key={index}>
                                    <input value={tag} type="checkbox" checked={selectTags?.includes(tag)} onChange={handleSelectTags} />
                                    <span className='mx-2'>{tag}</span>
                                </div>
                            )
                        }
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleUpdatePost}>
                        Update
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default ModalUpdatePost;