import React from 'react'
import { Link } from 'gatsby'

const Client = () => {
    return (
        <section id="client" className="client">
            <div className="container">
                <div className="row">
                    <div className="client__contact">
                        <h2 className="client__text">Let's Work Together</h2>
                        <Link to="/contact" className="client__cta">Get in Touch</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Client
