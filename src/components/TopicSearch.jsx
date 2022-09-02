export const TopicSearch = ({ submitHandler }) => {
  return (
    <form onSubmit={(e) => submitHandler(e)}>
      <label htmlFor="searchTerm">Search for a topic</label>
      <input type="text" name="searchTerm" />
      <button aria-label="Search">🔍</button>
      <hr />
    </form>
  );
};
