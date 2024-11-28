import React, { FC, FormEvent } from 'react';
import toast from 'react-hot-toast';
import { FaSearch } from 'react-icons/fa';
import styles from './SearchBar.module.css';
import { SearchBarProps } from '../../types';

const SearchBar: FC<SearchBarProps> = ({ defaultValue, setSearchQuery }) => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const targetEl = event.target as HTMLFormElement;
    const input = targetEl.elements.namedItem('search') as HTMLInputElement;
    const query = input.value.trim();

    if (query === '') {
      toast.error('Please enter your search queries!', {
        position: 'top-right',
      });
    } else {
      defaultValue();
      setSearchQuery(query);
      targetEl.reset();
    }
  };

  return (
    <header className={styles.header}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          className={styles.input}
          type="text"
          name="search"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button className={styles.submit} type="submit">
          <FaSearch />
          {'  '}Search
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
