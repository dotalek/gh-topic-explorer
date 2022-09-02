import { gql } from "@apollo/client";

export const GET_RELATED_TOPICS_BY_NAME = gql`
  query GetTopicsByName($name: String!) {
    topic(name: $name) {
      id
      name
      stargazerCount
      relatedTopics(first: 10) {
        id
        name
        stargazerCount
      }
    }
  }
`;
