import React from "react";
import styles from "./Search.module.css";
import {ReactComponent as SearchIcon} from "../../assets/Search icon.svg";

function Search({placeholder}){
    const onSubmit =(e) => {
        e.preventDefault();
    }
    return (
        <form className={styles.wrapper} onSubmit ={onSubmit}>
        <input className={styles.search}placeholder=""/>
        <button className={styles.SearchButton}type="submit">
            <SearchIcon/>
        </button>
    </form>)
}
export default Search;