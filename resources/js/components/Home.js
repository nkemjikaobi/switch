import React, { useState, useContext, Fragment } from 'react'
import {  Link } from 'react-router-dom'
import logo from '../../../public/images/logo.jpg'
import SubscribeContext from '../context/subscribe/subscribeContext';
import AlertContext from '../context/alert/alertContext';
import Alert from './Alert'

const Home = ( props ) => {

    const [ contact, setContact] = useState({
        firstName: '',
        lastName: '',
        email: ''
    });

    const subscribeContext = useContext(SubscribeContext);
    const { addSubscriber, error } = subscribeContext;

    const alertContext = useContext(AlertContext);
    const { setAlert } = alertContext;

    const { firstName, lastName, email } = contact;

    const onChange = e => setContact({ ...contact, [e.target.name]: e.target.value })

    const onSubmit = e => {
        e.preventDefault()
        addSubscriber(contact);

        if(error !== null){
            setAlert(error,'danger');
        }
        else{
            setAlert("Subscription successful",'success')
                //redirect
                props.history.push('/');
        }
    }

   
    return (
    <Fragment>
        <div className="container">
            <div className="row">
                <div className="col-md-12 col-sm-12">
                    <div className="d-flex flex-column justify-content-center align-items-center main-content">
                        <img src={logo} className="img-fluid mt-4" alt="Logo"></img>
                        <h3>Welcome</h3>
                        <p>Switch Up Africa (SWA), formerly known as Emir of Lagos Entertainment, is an avant-garde entertainment company focused on Public and Media Relations, Talent Management, Digital Distribution, Music/Content Promotion, Artist Development, Booking, A&R Services and Event Management. SWA takes a modern approach to delivering its services, with innovative initiatives that push through new frontiers, redefining what it means to be a full-service, neoteric entertainment company.</p>
                        <p>Over the past six years, Switch Up Africa has grown and developed a rich pedigree of media and music industry relationships and a strong network, while working with artistes such as Grammy award winner Burna Boy, multiple-award winner 2Baba, Headies winner Seyi Shay, Manifest (Ghana), Buju, Dj Nana, Stanley Enow (Cameroon), Skales, and more.</p>
                        <p>Bring your vision to us. We <span style={{ color: "#006837" }}>SWITCH </span>it UP!</p>
                        <div className="d-flex footer">
                            <button type="button" className=" mr-4 mb-4" data-toggle="modal" data-target="#exampleModalScrollable">Subscribe</button>
                            {/* <Link to='/news' className="mr-4 mb-4 button">News</Link> */}
                            <div className='d-flex'>
                                <div className="social d-flex flex-column justify-content-center align-items-center mr-2"><a href="https://www.instagram.com/switchupafrica" target="_blank"><i className="fab fa-instagram"></i></a></div>
                                <div className="social d-flex flex-column justify-content-center align-items-center mr-2"><a href="https://www.twitter.com/switchupafrica_" target="_blank"><i className="fab fa-twitter"></i></a></div>
                                <div className="social d-flex flex-column justify-content-center align-items-center mr-2"><a href="https://www.facebook.com/Switch-up-Africa-103494845191231/" target="_blank"><i className="fab fa-facebook"></i></a></div>
                                <div className="social d-flex flex-column justify-content-center align-items-center mr-2"><a href="mailto:info@switchupafrica.com"><i className="far fa-envelope"></i></a></div>
                            </div>
                        </div>  
                    </div>
                </div>
            </div>

            <div className="modal fade" id="exampleModalScrollable" tabIndex="-1" role="dialog" aria-labelledby="exampleModalScrollableTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-scrollable" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalScrollableTitle">Subscribe To Our News Letter</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <Alert />
                    <form onSubmit={onSubmit}>
                        <div className="form-group">
                                <label htmlFor="firstName">First Name</label>
                                <input type="text" onChange={onChange} value={firstName} className="form-control"  name="firstName" id="firstName" aria-describedby="firstName" required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="lastName">Last Name</label>
                                <input type="text" className="form-control" onChange={onChange} value={lastName} name="lastName" id="lastName" aria-describedby="lastName" required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Email address</label>
                                <input type="email" className="form-control" onChange={onChange} value={email} name="email" id="exampleInputEmail1" aria-describedby="emailHelp"  required/>
                            </div>
                        
                            <button type="submit" className="">Submit</button>
                    </form>
                    </div>
                    
                    </div>
                </div>
            </div>
        </div>
    </Fragment>
    )
}

export default Home
