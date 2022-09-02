import { useQuery } from "@apollo/client";
import { GET_TOPICS_BY_NAME } from "./api/githubQueries";

const App = () => {
  const { loading, error, data } = useQuery(GET_TOPICS_BY_NAME, {
    variables: { name: "react" },
  });

  if (loading) return <div className="">Loading Topics...</div>;

  if (error) return <div className="">Error while fetching topics</div>;

  return <div className="App"></div>;
};

export default App;
