import React, { Component } from 'react';
import Form from '../Form/Form'
import ContactList from '../ContactList/ContactList'
import { v4 as uuidv4 } from 'uuid'
import Filter from '../Filter/Filter'


class PhoneBook extends Component {
    state = {
        contacts: [],
        name: '',
        filter: ''
    }

    addContact = contact => {
        const { name } = contact
        if (this.state.contacts.every((contact) => !contact.name.includes(name))) {
            
        this.setState(prev => ({
        contacts: [...prev.contacts , {... contact, id: uuidv4()}]
    }))

        } else {
            alert(`${name} is already in contacts`)
     }
     
}

     deleteContact = id => {
        this.setState(prev => ({
            contacts: this.state.contacts.filter(contact => contact.id !== id)
    }))
}

 filterContact = () => {
     return this.state.contacts.filter(contact =>
         contact.name.toLowerCase().includes(this.state.filter.toLowerCase()))
     
 }
    
     onHandleChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
     })
    }

    render() {
        return (
            <>
            {/* <button onClick={() => this.addContact({ name: 'Alex', number: '1,2,3,4,5' })}
                type='button'
                >
                    Add contact
            </button>
                
                <button onClick={() => this.deleteContact(this.state.contacts[0].id)}
                type='button'
                >
                   Delete contact
                </button> */}
                
                <h1 className='title'>PhoneBook</h1>
                <Form addContact={this.addContact} />
            
                <h2 className='subtitle'>Contacts</h2>
                <Filter Filter={this.state.filter} onHandleChange={this.onHandleChange} />
                <ContactList contacts={this.state.filter ? this.filterContact() : this.state.contacts} deleteContact={this.deleteContact} />

                </>
        );
    }
}

export default PhoneBook;