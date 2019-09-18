import React from 'react'

export default function TeamMember(props) {
    return (
        <>
            {props.teamMember.map(member => (
                <div className='teamMember' key={member.id}>
                    <h1>Team Member</h1>
                    <hr />
                    <h3>Name: {member.name}</h3>
                    <hr />
                    <h3>Email: {member.email}</h3>
                    <hr />
                    <h3>Role: {member.role}</h3>
                </div>
            ))}
        </>
    )
}
