import React from 'react';
import s from './Contacts.module.css';
import PropTypes from 'prop-types';
import { FaSearchengin } from 'react-icons/fa';
import { IconContext } from 'react-icons';

const Contacts = ({ contacts, onDeleteBtnClick }) => (
  <div className={s.list}>
    <ul className={s.list__ul}>
      {contacts.map(person => (
        <li key={person.id} className={s.search__contact}>
          {person.name} : {person.number}
          <button
            className={s.search__button}
            type="button"
            onClick={() => onDeleteBtnClick(person.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  </div>
);

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
  onDeleteBtnClick: PropTypes.func.isRequired,
};

export default Contacts;
