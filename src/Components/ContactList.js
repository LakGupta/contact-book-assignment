import React from 'react'
import IndividualContact from './IndividualContact'

export default function ContactList(props) {
  return (
    <div className="row g-4">

        {props.contactData.map((x) => (
        <IndividualContact 
        onDelete={props.onDelete}
        onShow={props.onShow}
        key={x.id}
        id={x.id}
        name={x.name}
        email={x.email}
        website={x.website}
        phone={x.phone}
        username={x.username}
        ></IndividualContact>

        ))}
    </div>
  )
}
