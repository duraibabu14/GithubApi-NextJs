import React from "react";
import styles from "../../../styles/Profile.module.scss";
import { getOwner } from "../../../src/Services/service";
import Button from "../../../src/Shared/Button";

const index = ({ profile }) => {
  return (
    <div className={styles.profile}>
      <Button href="/" text="Back" />
      <img
        src={profile.avatar_url}
        alt=""
        className="is-rounded"
        width="120"
        height="120"
      />
      <h3 className="is-size-3">{profile.name}</h3>
      {profile.bio && <div className={styles.text}>{profile.bio}</div>}
      {profile.email && <div className={styles.text}>{profile.email}</div>}
      {profile.blog && <div className={styles.text}>{profile.blog}</div>}
      {profile.location && (
        <div className={styles.text}>{profile.location}</div>
      )}
      <div className={styles.counters}>
        <div>Followers:{profile.followers}</div>
        <div>Following:{profile.following}</div>
      </div>
      <Button
        href={profile.html_url}
        text="View On GitHub"
        type="dark"
        target="_blank"
        external
      />
    </div>
  );
};

export const getServerSideProps = async ({ query }) => {
  const res = await getOwner(query.id);
  return {
    props: {
      profile: res.data,
    },
  };
};

export default index;
