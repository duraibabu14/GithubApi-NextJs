import React from "react";
import RepoListItem from "./RepoListItem";
import styles from "../../styles/RepoList.module.scss";

const RepoList = ({ repo, loading }) => {
  if (loading) {
    return <img src="/img/loader.gif" alt="" className={styles.loader} />;
  }

  if (!repo || repo.length === 0) {
    return <span className={styles.message}>No Repos Found</span>;
  }
  return (
    <div className={styles.repoList}>
      {repo.map((r) => (
        <RepoListItem key={r.id} repo={r} />
      ))}
    </div>
  );
};

export default RepoList;
