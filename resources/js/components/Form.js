import React, { useState, Fragment } from 'react';

const Form = () => {

    const [ contact, setContact] = useState({
        firstName: '',
        lastName: '',
        email: ''
    });

    const { firstName, lastName, email } = contact;

    const onChange = e => setContact({ ...contact, [e.target.name]: e.target.value })

    const onSubmit = e => {
        e.preventDefault();
       
    }

    return (
        <Fragment>
       
            <div className="modal fade" id="exampleModalScrollable" tabIndex="-1" role="dialog" aria-labelledby="exampleModalScrollableTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-scrollable" role="document">
                    <div className="modal-content">
                        <form onSubmit={onSubmit}>
                            <input type="text" placeholder='FirstName' name='firstName' value={firstName} onChange={onChange} />
                            <input type="text" placeholder='LastName' name='lastName' value={lastName} onChange={onChange} />
                            <input type="email" placeholder='Email' name='email' value={email} onChange={onChange} />
                            <div>
                                <button type="submit" className='btn btn-primary'>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Fragment> 
        
    )
}

export default Form
