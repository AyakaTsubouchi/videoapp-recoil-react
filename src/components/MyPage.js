import React from 'react'
import {Link} from 'react-router-dom'
import MyList from './MyList'
import "./MyPage.css"


function MyPage() {
    return (
        <div className="my_page">
            <MyList/>
            <Link to="/">back to home</Link>
        </div>
    )
}

export default MyPage
