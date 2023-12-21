import React from 'react'
import { Link } from 'react-router-dom'

const CTA = () => {
  return (
    <section className='cta cta-text'>
        <p>Have a project in mind ? <br className='sm:block hidden'/>
        Let's build something together!
        </p>
        <Link to="/Contact" className='btn'>
            Contact
        </Link>
    </section>
  )
}

export default CTA