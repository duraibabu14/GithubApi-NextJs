import Axios from "axios";
import React, { useState } from "react";
import RepoList from "../src/components/RepoList";
import Search from "../src/components/Search";
import { getRandomWord } from "../src/helpers/getRandomWord";
import { searchRepos } from "../src/Services/service";
import styles from "../styles/Home.module.scss";

function index(props) {
  const [searchText, setsearchText] = useState(props.searchText);
  const [language, setlanguage] = useState("");
  const [repo, setrepo] = useState(props.repo);
  const [loading, setloading] = useState(false);

  const onTextChange = (text) => {
    setsearchText(text);
    if (text) {
      loadRepo(text, language);
    }
  };

  const onLanguageChange = (language) => {
    setlanguage(language);
    loadRepo(searchText, language);
  };

  const loadRepo = async (searchText, language) => {
    setloading(true);
    const res = await searchRepos(searchText, language);
    setloading(false);
    setrepo(res?.data.items);
  };

  return (
    <div className={styles.container}>
      <img className={styles.logo} src="/img/study.svg" alt="" />
      <Search
        searchText={searchText}
        language={language}
        onTextChange={onTextChange}
        onLanguageChange={onLanguageChange}
      />
      <RepoList loading={loading} repo={repo} />
    </div>
  );
}

export const getServerSideProps = async () => {
  const searchText = getRandomWord();
  const res = await searchRepos(searchText);

  return {
    props: {
      searchText: searchText,
      repo: res.data.items,
    },
  };
};

export default index;
