import React from 'react'

const footerYear = new Date().getFullYear()
function Footer() {
    return (
        <footer className='footer p-10 bg-neutral text-secondary-content footer-center'>
            <p>Copyright &copy; {footerYear} All rights reserved</p>
        </footer>
    )
}

export default Footer