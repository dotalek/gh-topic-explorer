import { useState } from "react";
import { TopicsCollection } from "./TopicsCollection";
import { TopicSearch } from "./TopicSearch";
import { ApolloProvider } from "@apollo/client";
import GHClient from "../api/githubClient";
import "./TopicExplorer.css";

export const TopicExplorer = () => {
  const [searchTerm, setSearchTerm] = useState("react");

  const topicSearchHandler = (event) => {
    event.preventDefault();
    setSearchTerm(event.target.searchTerm.value.toLowerCase());
    event.target.searchTerm.value = "";
  };

  const topicClickHandler = (name) => {
    setSearchTerm(name);
  };

  return (
    <main className="main">
      <ApolloProvider client={GHClient}>
        <TopicSearch submitHandler={topicSearchHandler} />

        <TopicsCollection
          searchTerm={searchTerm}
          clickHandler={topicClickHandler}
        />
      </ApolloProvider>
    </main>
  );
};
