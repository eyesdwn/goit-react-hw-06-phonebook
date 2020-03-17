import React, { Component } from 'react';
import uuid from 'uuid';
import { CSSTransition } from 'react-transition-group';
import ContactForm from '../ContactForm/ContactForm';
import Filter from '../Filter/Filter';
import ContactList from '../ContactList/ContactList';
import styles from './App.module.css';
import Logo from '../Logo/Logo';
import Message from '../Message/Message';
import PopTransition from '../../Transitions/Filter-pop.module.css';
import FilterTransition from '../../Transitions/Filter-pop.module.css';
import LogoSlideTransition from '../../Transitions/Logo-slide.module.css';

export default class App extends Component {
  state = {
    didMount: false,
    contactExists: false,
  };

  filterContacts = (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  changeFilter = e => {
    this.props.updateFilter(e.target.value);
  };

  isAlreadyAdded = (contact, contacts) =>
    contacts.find(item =>
      item.name.toLowerCase().includes(contact.name.toLowerCase()),
    );

  addContact = contact => {
    const { contacts } = this.props;

    const contactToAdd = {
      ...contact,
      id: uuid(),
    };

    !this.isAlreadyAdded(contact, contacts)
      ? this.props.saveContact(contactToAdd)
      : this.setState(
          prevState => ({ contactExists: !prevState.contactExists }),
          () =>
            setTimeout(() => {
              this.setState(prevState => ({
                contactExists: !prevState.contactExists,
              }));
            }, 1000),
        );
  };

  deleteContact = id => {
    this.props.deleteContact(id);
  };

  componentDidMount() {
    this.setState({ didMount: true });

    const contacts =
      JSON.parse(localStorage.getItem('contacts')) || this.props.contacts;

    contacts.forEach(contact => {
      const contactToAdd = {
        ...contact,
        id: uuid(),
      };
      this.props.saveContact(contactToAdd);
    });
  }
  componentDidUpdate(prevState) {
    const { contacts } = this.props;
    if (contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }

  render() {
    const { didMount, contactExists } = this.state;
    const { filter, contacts } = this.props;
    // console.log(contacts);

    const filteredContacts = this.filterContacts(contacts, filter);

    return (
      <div className={styles.app}>
        <CSSTransition
          in={didMount}
          timeout={500}
          classNames={LogoSlideTransition}
          appear
        >
          <Logo />
        </CSSTransition>
        <ContactForm onAddContact={this.addContact} />
        {contacts.length > 0 && (
          <>
            <h2>Contacts</h2>
            <CSSTransition
              in={contacts.length > 1}
              timeout={250}
              classNames={FilterTransition}
              unmountOnExit
            >
              <Filter onChangeFilter={this.changeFilter} />
            </CSSTransition>
            <ContactList
              contacts={filteredContacts}
              onDeleteContact={this.deleteContact}
            />
          </>
        )}
        <CSSTransition
          in={contactExists}
          timeout={250}
          classNames={PopTransition}
          unmountOnExit
        >
          <Message />
        </CSSTransition>
      </div>
    );
  }
}
