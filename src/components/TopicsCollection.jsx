import { useQuery } from "@apollo/client";
import { GET_RELATED_TOPICS_BY_NAME } from "../api/githubQueries";
import { Topic } from "./Topic";

export const TopicsCollection = ({ searchTerm, clickHandler }) => {
  // GitHub API Query
  const { loading, error, data } = useQuery(GET_RELATED_TOPICS_BY_NAME, {
    variables: { name: searchTerm },
  });

  // Give some feedback in the component related to the API call
  if (loading) return <h3 className="">Loading Topics...</h3>;
  if (error) return <h3 className="">Error while fetching topics</h3>;

  let mainTopic = <h3>No main topic was found</h3>;
  let relatedTopics = <h3>No related topics were found</h3>;
  // Only build the Topics components if we received data
  if (data.topic) {
    mainTopic = (
      <>
        <h3>The main topic is:</h3>
        <Topic key={data.topic.id} topic={data.topic} />
      </>
    );

    // Only build related topics if needed
    if (data.topic.relatedTopics.length) {
      relatedTopics = (
        <>
          <h3>The related topics are;</h3>
          {data.topic.relatedTopics.map((topic) => {
            return (
              <Topic key={topic.id} topic={topic} clickHandler={clickHandler} />
            );
          })}
        </>
      );
    }
  }
  return (
    <output>
      {mainTopic}
      <hr />
      {relatedTopics}
    </output>
  );
};
