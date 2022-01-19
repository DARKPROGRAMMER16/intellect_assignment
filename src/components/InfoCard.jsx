import React, { Fragment } from 'react'

const InfoCard = (props) => {
    return (
        <Fragment>
            <div className="info-card">
                <h3 className="text-center">{props.heading}</h3>
                {props.children}
            </div>
        </Fragment>
    )
}

export default InfoCard
