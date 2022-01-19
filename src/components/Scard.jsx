import React, { Fragment } from 'react'


const Scard = ({data}) => {
    return (
        <Fragment>
            <div className="sidebar-card mb-3 py-2">
                {
                    data.map((data) => {
                        return (
                            <div className="li-it" key={data.icon}>
                                <p><i className={`${data.icon} me-2`}></i>{data.title}</p>
                                <i className="fas fa-chevron-right mra"></i>
                            </div>
                        )
                    })
                }
                {/* <div className="li-it">
                    <p><i class="fas fa-chalkboard-teacher me-2"></i>Dashboard</p>
                    <i class="fas fa-chevron-right mra"></i>
                </div>
                <div className="li-it">
                    <p><i class="fas fa-chalkboard-teacher me-2"></i>Dashboard</p>
                    <i class="fas fa-chevron-right mra"></i>
                </div>
                <div className="li-it">
                    <p><i class="fas fa-chalkboard-teacher me-2"></i>Dashboard</p>
                    <i class="fas fa-chevron-right mra"></i>
                </div> */}
            </div>
        </Fragment>
    )
}

export default Scard
