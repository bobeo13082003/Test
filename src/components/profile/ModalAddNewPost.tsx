import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './Profile.scss'
type modalProps = {
    show: boolean,
    setShowModalAddNew: (show: boolean) => void,
    tags: string[]
}

const ModalAddNewPost = (props: modalProps) => {
    const { show, setShowModalAddNew, tags } = props;
    const handleClose = () => {
        setShowModalAddNew(false)
    }
    return (
        <div>
            <Modal size='xl' show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add New Posts</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='input'>
                        <div className='input__title'>
                            <label>Title</label>
                            <input type="text" />
                        </div>
                        <div className='input__description'>
                            <label>Description</label>
                            <textarea />
                        </div>
                    </div>
                    <label className='mt-5 mb-2'>Tags</label>
                    <div className='selecttag'>
                        {
                            tags.map((tag, index) =>
                                <div key={index}>
                                    <input type="checkbox" />
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
                    <Button variant="primary" onClick={handleClose}>
                        Add New
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default ModalAddNewPost;