import React from 'react'

const NotFound = () => {
    return (
        <section className='page-notfound'>
            <div className='content'>
                <img src="notfound.png" alt="notfound" />
                <link to={"/"}>RETURN TO HOME</link>
            </div>
        </section>
    );
};

export default NotFound