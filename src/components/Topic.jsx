import React from "react";

export const Topic = ({ topic, clickHandler }) => {
  const { name, stargazerCount } = topic;
  return (
    <article
      onClick={() => {
        clickHandler(name);
      }}
    >
      <h4>{name}</h4>
      <p>
        <i aria-label={`has ${stargazerCount} stargazers`}>✨</i>{" "}
        <strong>{stargazerCount}</strong>
      </p>
      <hr />
    </article>
  );
};
