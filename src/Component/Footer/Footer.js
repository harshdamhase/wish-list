import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div>
            <footer className="footer">
                <div className='container'>
                    <p className='footer-title'>Developed By  @Harshda Mhase <a href="https://github.com/yogita-s-24/motiveminder"><i className="fa-brands fa-github github-icon"></i></a></p>
                    {/* <p className='github-icon'>
        <a href = "https://github.com/harshdamhase/wish-list"></a></p> */}
                </div>
            </footer>
        </div>
    )
}

export default Footer