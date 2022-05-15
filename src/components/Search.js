import React from "react";
import LANGUAGES from "../constants/language.constant";
import Select from "../Shared/Select";
import Textinput from "../Shared/Textinput";
import styles from "../../styles/Search.module.scss";

const Search = (props) => {
  const { language, searchText, onTextChange, onLanguageChange } = props;

  const languages = [{ value: "", label: "All" }, ...LANGUAGES];

  return (
    <div className={styles.search}>
      <Textinput
        className={styles.searchInput}
        label="Repo Search"
        value={searchText}
        onChange={(value) => onTextChange(value)}
      />
      <Select
        className={styles.languageSelect}
        label="Language"
        value={language}
        onChange={(value) => onLanguageChange(value)}
        options={languages}
      />
    </div>
  );
};

export default Search;
