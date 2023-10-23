import React from 'react';
import './styles.css'
const Pagination = ({ numberPages, setSelectedPage, selectedPage }) => {
    const pages = [];
    for (let i = 0; i < numberPages; i++) {
        pages.push(i + 1);
    }

    return (
        <div className="pagination text-center" style={{ marginTop: '80px' }}>
            <div className="container">
                <div className="parent m-auto bg-dark w-50 overflow-x-scroll" style={{width: '300px'}}>
                    <div className='d-flex gap-2 py-2'>
                        {pages.map((e) => (
                            <p
                                onClick={() => setSelectedPage(e)}
                                style={{  border: '1px solid #f0fd00', cursor: 'pointer' }}
                                className={`${e === selectedPage ? 'bg-black' : 'bg-dark'} px-3 py-2`} key={e}>
                                {e}
                            </p>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pagination;
