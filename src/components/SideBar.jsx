import React, { Fragment } from 'react'
import Scard from './Scard'

const d1 = [
    {
        icon: "fas fa-chalkboard-teacher",
        title:"Dashboard"
    },
    {
        icon: "fas fa-sliders-h",
        title:"Sidebar Type"
    },
    {
        icon: "far fa-file",
        title:"Page Layout"
    },
]

const d2 = [
    {
        icon: "fas fa-inbox",
        title:"Inbox"
    },
    {
        icon: "fas fa-ticket-alt",
        title:"Ticket"
    },
    {
        icon: "fas fa-align-center",
        title:"Extra"
    },
]

const d3 = [
    {
        icon: "fab fa-uikit",
        title:"UI Element "
    },
    {
        icon: "fas fa-address-card",
        title:"Card"
    },
    {
        icon: "fas fa-address-card",
        title:"Componet"
    },
    {
        icon: "fas fa-align-center",
        title:"Widget"
    },
]


const SideBar = () => {
    
    return (
        <Fragment>
            <div className="sidebar mt-3">
                <Scard data={d1}/>
                <Scard data={d2}/>
                <Scard data={d3}/>
            </div>
        </Fragment>
    )
}

export default SideBar
