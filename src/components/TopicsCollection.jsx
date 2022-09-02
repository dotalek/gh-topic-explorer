import { useQuery } from "@apollo/client";
import { GET_RELATED_TOPICS_BY_NAME } from "../api/githubQueries";
import { Topic } from "./Topic";

export const TopicsCollection = ({ searchTerm, clickHandler }) => {
  // GitHub API Query
  const { loading, error, data } = useQuery(GET_RELATED_TOPICS_BY_NAME, {
    variables: { name: searchTerm },
  });

  // Give some feedback in the component related to the API call
  if (loading) return <div className="">Loading Topics...</div>;
  if (error) return <div className="">Error while fetching topics</div>;

  // Build the Topics renders
  let mainTopic;
  let relatedTopics;
  if (data.topic) {
    mainTopic = <Topic key={data.topic.id} topic={data.topic} />;
    relatedTopics = data.topic.relatedTopics.map((topic) => {
      return <Topic key={topic.id} topic={topic} clickHandler={clickHandler} />;
    });
  }
  return (
    <section>
      {mainTopic ? (
        <>
          <h3>The main topic is:</h3>
          {mainTopic}
        </>
      ) : (
        <h3>No main topic was found</h3>
      )}
      {relatedTopics ? (
        <>
          <h3>The related topics are:</h3>
          {relatedTopics}
        </>
      ) : (
        <h3>No related topics were found</h3>
      )}
    </section>
  );
};
