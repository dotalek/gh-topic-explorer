import "./Topic.css";

export const Topic = ({ topic, clickHandler }) => {
  const { name, stargazerCount } = topic;
  return (
    <article
      className="topic"
      onClick={() => {
        clickHandler(name);
      }}
    >
      <h4 className="topic-name">{name}</h4>
      <span className="topic-stargazercount">
        <i aria-label={`has ${stargazerCount} stargazers`}>⭐️</i>
        <strong>{stargazerCount}</strong>
      </span>
    </article>
  );
};
