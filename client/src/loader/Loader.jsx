import React from 'react';

const Loader = () => {
    return (
        <div className="container mt-5">
            <div className="row d-flex justify-content-center">
                <div className="col-md-2 text-center">
                <button className="btn btn-primary mt-5" type="button" disabled>
                    <span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
                    <span className="visually-hidden">Loading...</span>
                    </button>
                    <button className="btn btn-primary" type="button" disabled>
                    <span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
                    Loading...
                    </button>
                </div>

            </div>
        </div>

)
    ;
};

export default Loader;