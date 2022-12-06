import React from 'react'
import { Link } from 'react-router-dom'
import { FaHome } from 'react-icons/fa'

function About() {
    return (

        <div className='hero'>
            <div className='text-center hero-content'>
                <div className='max-w-lg'>
                    <h1 className='text-5xl font-bold mb-8'>Github Finder</h1>
                    <p className='text-4xl mb-8'>Created Using React!</p>
                    <Link className='btn btn-primary' to='/'>
                        <FaHome className='mr-2' />
                        Back To Home
                    </Link>
                </div>
            </div>
        </div>

    )
}

export default About