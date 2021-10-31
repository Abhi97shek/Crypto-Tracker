import React from 'react'
import styles from '../styles/SearchBar.module.css';
function SearchBar() {
    return (
        <div className={styles.coin_search}>
            <input className={styles.coin_input} type="text" placeholder="Search"></input>
        </div>
    )
}

export default SearchBar;
