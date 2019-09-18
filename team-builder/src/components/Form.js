import React, { useState } from 'react'

export default function Form(props) {
    const formElement = document.querySelector('form');
    const [member, setMember] = useState({});
    function handleChange(event) {
        setMember({...member, [event.target.id]: event.target.value});
    }
    function handleSubmit(event) {
        event.preventDefault();
        props.addNewMember(member);
        console.log('Member', member);
        setMember({});
        formElement.reset();
    }
    return (
        <div className='formContainer'>
            <div className='memberForm'>
                <h1>Add a Team Member</h1>
                <form onSubmit={handleSubmit}>
                    <h3>Name: </h3><input required id='name' type='text' onChange={handleChange}/>
                    <h3>Email: </h3><input required id='email' type='text' onChange={handleChange}/>
                    <h3>Role: </h3><input required id='role' type='text' onChange={handleChange}/>
                    <button type='submit'>Add Member</button>
                </form>
            </div>
        </div>
    )
}
