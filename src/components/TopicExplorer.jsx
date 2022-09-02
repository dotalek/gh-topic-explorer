import { useState } from "react";
import { TopicsCollection } from "./TopicsCollection";
import { TopicSearch } from "./TopicSearch";

export const TopicExplorer = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const topicSearchHandler = (event) => {
    event.preventDefault();
    setSearchTerm(event.target.searchTerm.value);
    event.target.searchTerm.value = "";
  };

  const topicClickHandler = (name) => {
    setSearchTerm(name);
  };

  return (
    <main>
      <h1>GitHub Topic Explorer</h1>
      <h2>Look for other topics related to your favourite project!</h2>

      <TopicSearch submitHandler={topicSearchHandler} />

      <TopicsCollection
        searchTerm={searchTerm}
        clickHandler={topicClickHandler}
      />

      <footer>Made with ❤️ by Alek</footer>
    </main>
  );
};
