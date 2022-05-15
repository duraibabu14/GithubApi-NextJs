import React from "react";
import styles from "../../../styles/Repo.module.scss";
import { getRepo } from "../../../src/Services/service";
import Button from "../../../src/Shared/Button";

const index = ({ repo }) => {
  return (
    <div className={styles.repo}>
      <Button href="/" text="Back" />
      <img
        src={repo.owner.avatar_url}
        alt=""
        className="is-rounded"
        width="120"
        height="120"
      />
      <div className={styles.header}>
        <span>{repo.name}</span>
      </div>

      {/* <UserAvatar user={repo.owner} className={styles.userav} /> */}
      <div className={styles.description}>{repo.description}</div>
      <div className={styles.language}>{repo.language}</div>
      <Button
        href={repo.html_url}
        text="View On GitHub"
        type="dark"
        target="_blank"
        external
      />
    </div>
  );
};

export const getServerSideProps = async ({ query }) => {
  const res = await getRepo(query.id);
  return {
    props: {
      repo: res.data,
    },
  };
};

export default index;
