import "./TopicSearch.css";

export const TopicSearch = ({ submitHandler }) => {
  return (
    <form name="search form" onSubmit={(e) => submitHandler(e)}>
      <label htmlFor="searchTerm" className="search-label">
        Search for a topic
      </label>
      <input type="text" name="searchTerm" className="search-input" />
      <button aria-label="Search" className="search-submit">
        🔍
      </button>
      <hr />
    </form>
  );
};
