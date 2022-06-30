import './ContactForm.css'
import React, { Component } from 'react'
import { nanoid } from 'nanoid'

const id = nanoid()

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  }

  handleSubmit = (evt) => {
    evt.preventDefault()
    const form = evt.currentTarget
    const name = form.elements.name.value
    const number = form.elements.number.value

    this.setState({ id, name, number })
    this.props.onSubmit({ id, name, number })
    form.reset()
  }
  render() {
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <input
          className="input"
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <input
          className="input"
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <button className="button" type="submit">
          Add contact
        </button>
      </form>
    )
  }
}

export default ContactForm
