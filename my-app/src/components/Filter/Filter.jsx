import React from 'react';
import PropTypes from 'prop-types';
import styles from './Filter.module.css';

const Filter = ({ onChangeFilter }) => {
  return (
    <form>
      <label htmlFor="filter">
        Find contacts by name
        <input
          id="filter"
          className={styles.filter}
          type="text"
          name="filter"
          onChange={onChangeFilter}
        />
      </label>
    </form>
  );
};

Filter.propTypes = {
  onChangeFilter: PropTypes.func.isRequired,
};

export default Filter;
