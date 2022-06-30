import './ContactList.css'
import React, { Component } from 'react'

class ContactList extends Component {
  render() {
    return (
      <ul>
        {this.props.contacts.map((contact) => {
          return (
            <li className="contacts-item" key={contact.id}>
              {contact.name}:{' '}
              <span className="contacts-number">{contact.number}</span>
              <button
                className="button"
                type="button"
                onClick={() => this.props.removeContact(contact.id)}
              >
                Delete
              </button>
            </li>
          )
        })}
      </ul>
    )
  }
}

export default ContactList
