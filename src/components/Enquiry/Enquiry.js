import React, { useState } from 'react'

import { Col, Container, Row } from 'react-bootstrap'
import ArrowRightCircle from '../../images/arrow-right-circle.svg'
import { useForm } from "react-hook-form";
import Dropdown from '../Dropdown/Dropdown';

const Enquiry = () => {

    const [enquiriesChecked, setEnquiriesChecked] = useState(true);
    const [dropdownValue, setdropdownValue] = useState('')
    const [isMailSent, setMailSent] = useState(false);

    const toastStyle = {
        "marginTop": "1rem"
    }

    const { register, handleSubmit, errors } = useForm();

    const onSubmit = (data, e) => {
        enquiriesChecked ? data.type = "Enquiry": data.type = "J";
        enquiriesChecked ? delete data.job: data.job = dropdownValue;

        var form_data = new FormData();

        for ( var key in data ) {
            form_data.append(key, data[key]);
        }
        var requestOptions = {
            method: 'POST',
            body: form_data,
            redirect: 'follow'
        };
        
        fetch("/registerSocio.php", requestOptions)
        .then(response => response.text())
        .then(result => {
            
            setMailSent(prevState => !prevState)

            fetch("/register.php", requestOptions)
            .then(response => response.text())
            .then(result => e.target.reset())
            .catch(error => console.log('error', error)); 
        })
        .catch(error => console.log('error', error));
    
        
    };

    const tabForm = () => {
        if(enquiriesChecked) {
            return (
                <>
                    <div className="enquiry__form">
                        <input type="text" style={{borderColor: `${errors.fname ? 'red': ''}`}} className="enquiry__input" name="fname" placeholder="First Name" ref={register({required: true, minLength: 2, pattern: /^[A-Za-z]+$/i})} />
                        <input type="text" style={{borderColor: `${errors.lname ? 'red': ''}`}} className="enquiry__input" name="lname" placeholder="Last Name" ref={register({required: true, minLength: 2, pattern: /^[A-Za-z]+$/i})} />
                        <input type="text" style={{borderColor: `${errors.company ? 'red': ''}`}} className="enquiry__input" name="company" placeholder="Company Name" ref={register({required: true})} />
                    </div>
                    <div className="enquiry__form" style={{marginTop: "5rem"}}>
                        <input type="email" style={{borderColor: `${errors.email ? 'red': ''}`}} className="enquiry__input" name="email" placeholder="Email address" ref={register({required: true, minLength: 2})} />
                        <input type="tel" style={{borderColor: `${errors.phone ? 'red': ''}`}} className="enquiry__input" name="phone" placeholder="Phone" ref={register({required: true, minLength: 2, pattern: /^[0-9+]+$/i})} />
                    </div>
                </>
            )
        } else {
            return (
                <>
                    <div className="enquiry__form">
                        <input type="text" style={{borderColor: `${errors.fname ? 'red': ''}`}} className="enquiry__input" name="fname" placeholder="First Name" ref={register({required: true, minLength: 2, pattern: /^[A-Za-z]+$/i})} />
                        <input type="text" style={{borderColor: `${errors.lname ? 'red': ''}`}} className="enquiry__input" name="lname" placeholder="Last Name" ref={register({required: true, minLength: 2, pattern: /^[A-Za-z]+$/i})} />
                        <Dropdown setdropdownValue={setdropdownValue} dropdownValue={dropdownValue} />
                    </div>
                    <div className="enquiry__form" style={{marginTop: "5rem"}}>
                        <input type="email" style={{borderColor: `${errors.email ? 'red': ''}`}} className="enquiry__input" name="email" placeholder="Email address" ref={register({required: true, minLength: 2})} />
                        <input type="tel" style={{borderColor: `${errors.phone ? 'red': ''}`}} className="enquiry__input" name="phone" placeholder="Phone" ref={register({required: true, minLength: 10, pattern: /^[0-9+]+$/i})} />
                    </div>
                </>
            )
        }
    }

    return (
        <section id="enquiry" className="enquiry">
            <Container>
                <Row style={{justifyContent: "center"}}>
                    <Col md={8}>
                        <div className="enquiry__wrapper">
                            <ul className="enquiry__tabs">
                                {/* eslint-disable-next-line */
                                    }<li className={`enquiry__item ${enquiriesChecked ? 'enquiry__item--active': ''}`} onClick={() => setEnquiriesChecked(true)}>
                                    {/* eslint-disable-next-line */
                                    }<a className={`enquiry__link ${enquiriesChecked ? 'enquiry__link--active': ''}`}>Business Enquiries</a>
                                </li>
                                {/* eslint-disable-next-line */
                                    }<li className={`enquiry__item ${!enquiriesChecked ? 'enquiry__item--active': ''}`} onClick={() => setEnquiriesChecked(false)}>
                                    {/* eslint-disable-next-line */
                                    }<a className={`enquiry__link ${!enquiriesChecked ? 'enquiry__link--active': ''}`}>Careers</a>
                                </li>
                            </ul>
                            <div className="enquiry__content">
                                <div className="enquiry__pane mt-4">
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        { tabForm() }

                                        <div className="enquiry__button">
                                            <button type="submit" className="enquiry__button--text" >Send <img  className="enquiry__button--img" src={ArrowRightCircle} alt="Arrow right circle"/></button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            {isMailSent ? (
                <div class="alert alert-success" style={toastStyle} role="alert">
                    We will get in touch with you shortly.
                </div>
            ) : null}
        </section>
    )
}

export default Enquiry
