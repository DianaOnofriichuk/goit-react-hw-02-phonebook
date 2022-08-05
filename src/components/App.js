import './App.css'
import { useState, useEffect } from 'react'
import ContactForm from './ContactForm/ContactForm'
import Filter from './Filter/Filter.jsx'
import ContactList from './ContactList/ContactList.jsx'

const App = () => {
  const getContactsFromLocalStorage = () => {
    if (localStorage.getItem('contacts')) {
      return JSON.parse(localStorage.getItem('contacts'))
    } else {
      return []
    }
  }
  const [contacts, setContacts] = useState(getContactsFromLocalStorage())
  const [filter, setFilter] = useState('')
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts))
  }, [contacts])

  const onSubmit = (contact) => {
    if (contacts.find((prevContact) => prevContact.name === contact.name)) {
      alert(`${contact.name} is already in contacts`)
    } else {
      setContacts([...contacts, contact])
      setName(contact.name)
      setNumber(contact.number)
    }
  }

  const onChange = (value) => {
    setFilter(value)
  }

  const filterContacts = () => {
    return contacts.filter(
      (contact) =>
        contact.name.toLowerCase().includes(filter.toLowerCase()) ||
        contact.number.includes(filter),
    )
  }

  const removeContact = (selectedСontact) => {
    const newArray = contacts.filter((contact) => {
      return contact.id !== selectedСontact
    })
    setContacts(newArray)
  }

  return (
    <div className="phonebook">
      <h1 className="title">Phonebook</h1>
      <ContactForm onSubmit={onSubmit} />
      <h2 className="title">Contacts</h2>
      <Filter onChange={onChange} />
      <ContactList
        className="contacts-list"
        contacts={filterContacts()}
        removeContact={removeContact}
      />
    </div>
  )
}

export default App
