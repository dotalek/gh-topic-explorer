import { useState } from "react";
import { TopicsCollection } from "./TopicsCollection";
import { TopicSearch } from "./TopicSearch";

export const TopicExplorer = () => {
  const [searchTerm, setSearchTerm] = useState("react");

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
      <TopicSearch submitHandler={topicSearchHandler} />

      <TopicsCollection
        searchTerm={searchTerm}
        clickHandler={topicClickHandler}
      />
    </main>
  );
};
