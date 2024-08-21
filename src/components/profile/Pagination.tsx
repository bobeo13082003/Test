import ReactPaginate from 'react-paginate';
import './Profile.scss'



type paginateProps = {
    totalPage: number
    setCurrentPage: (page: number) => void;
}
type event = {
    selected: number
}
const Pagination = (props: paginateProps) => {
    const { totalPage, setCurrentPage } = props;
    const handlePageClick = (e: event) => {
        setCurrentPage(e.selected + 1)
    }
    return (
        <div className='paginate'>
            <ReactPaginate
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                marginPagesDisplayed={2}
                pageCount={totalPage}
                previousLabel="< previous"
                pageClassName="page-item"
                pageLinkClassName="page-link"
                previousClassName="page-item"
                previousLinkClassName="page-link"
                nextClassName="page-item"
                nextLinkClassName="page-link"
                breakLabel="..."
                breakClassName="page-item"
                breakLinkClassName="page-link"
                containerClassName="pagination"
                activeClassName="active"
                renderOnZeroPageCount={null}
            />
        </div>
    );
};

export default Pagination;