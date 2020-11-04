import React from 'react';

const ContactList = ({contacts , deleteContact })=> {
    return (
       <>
            <ul>
                {contacts.map(contact =>
                    <li key={contact.id}>{contact.name} : {contact.number}
                        <button onClick={() => deleteContact(contact.id)} className='deleteBtn' type='button'>Delete</button>
                     </li>
                    )}
            </ul>
       </>
    );
};

export default ContactList;