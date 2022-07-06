import './App.css'
import ContactForm from './ContactForm/ContactForm'
import React, { Component } from 'react'
import Filter from './Filter/Filter.jsx'
import ContactList from './ContactList/ContactList.jsx'

class App extends Component {
  state = {
    contacts: [],
    filter: '',
    name: '',
    number: '',
  }
  componentDidMount() {
    const contacts = JSON.parse(localStorage.getItem('contacts'))
    if (contacts) {
      this.setState({ contacts })
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
    }
  }
  onSubmit = (contact) => {
    if (
      this.state.contacts.find(
        (prevContact) => prevContact.name === contact.name,
      )
    ) {
      alert(`${contact.name} is already in contacts`)
    } else {
      this.setState({
        contacts: [...this.state.contacts, contact],
        name: contact.name,
        number: contact.number,
      })
    }
  }

  onChange = (value) => {
    this.setState({ filter: value })
  }

  filterContacts = () => {
    return this.state.contacts.filter(
      (contact) =>
        contact.name.toLowerCase().includes(this.state.filter.toLowerCase()) ||
        contact.number.includes(this.state.filter),
    )
  }

  removeContact = (selectedСontact) => {
    const newArray = this.state.contacts.filter((contact) => {
      return contact.id !== selectedСontact
    })
    this.setState({ contacts: newArray })
  }

  render() {
    return (
      <div className="phonebook">
        <h1 className="title">Phonebook</h1>
        <ContactForm onSubmit={this.onSubmit} />
        <h2 className="title">Contacts</h2>
        <Filter onChange={this.onChange} />
        <ContactList
          className="contacts-list"
          contacts={this.filterContacts()}
          removeContact={this.removeContact}
        />
      </div>
    )
  }
}

export default App
