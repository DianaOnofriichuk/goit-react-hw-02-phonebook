import './ContactList.css'

const ContactList = ({ contacts, removeContact }) => {
  return (
    <ul>
      {contacts.map((contact) => {
        return (
          <li className="contacts-item" key={contact.id}>
            {contact.name}:{' '}
            <span className="contacts-number">{contact.number}</span>
            <button
              className="button"
              type="button"
              onClick={() => removeContact(contact.id)}
            >
              Delete
            </button>
          </li>
        )
      })}
    </ul>
  )
}

export default ContactList
