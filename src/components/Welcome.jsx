import React, { Fragment } from 'react'

const Welcome = () => {
    return (
        <Fragment>
            <div className="welcome_section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="wl-left mt-4">
                                <h1 className="wl-heading">Welcome</h1>
                                <h1 className="wl-name">Pablo Nicolous</h1>
                                <button className="btn wl-btn">NY, USA</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Welcome
