import { useQuery } from "@apollo/client";
import { GET_RELATED_TOPICS_BY_NAME } from "../api/githubQueries";
import { Topic } from "./Topic";
import "./TopicsCollection.css";

export const TopicsCollection = ({ searchTerm, clickHandler }) => {
  // GitHub API Query
  const { loading, error, data } = useQuery(GET_RELATED_TOPICS_BY_NAME, {
    variables: { name: searchTerm },
  });

  // Give some feedback in the component related to the API call
  if (loading) return <h3 className="collection-title">Loading Topics...</h3>;
  if (error)
    return <h3 className="collection-title">Error while fetching topics</h3>;

  let mainTopic = <h3 className="collection-title">No main topic was found</h3>;
  let relatedTopics = (
    <h3 className="collection-title">No related topics were found</h3>
  );
  // Only build the Topics components if we received data
  if (data.topic) {
    mainTopic = (
      <>
        <h3 className="collection-title">The main topic is:</h3>
        <section className="collection-section">
          <Topic
            key={data.topic.id}
            topic={data.topic}
            clickHandler={clickHandler}
          />
        </section>
      </>
    );

    // Only build related topics if needed
    if (data.topic.relatedTopics.length) {
      relatedTopics = (
        <>
          <h3 className="collection-title">The related topics are:</h3>
          <section className="collection-section">
            {data.topic.relatedTopics.map((topic) => {
              return (
                <Topic
                  key={topic.id}
                  topic={topic}
                  clickHandler={clickHandler}
                />
              );
            })}
          </section>
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
