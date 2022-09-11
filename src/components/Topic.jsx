import styled from "styled-components";

const StyledTopic = styled.article`
  border-radius: 1rem;
  padding: 1rem;
  width: 10rem;
  outline: 1px solid gray;
  margin: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    background-color: gray;
  }
`;

const TopicName = styled.h4`
  font-size: 1rem;
  font-weight: bold;
`;

const Icon = styled.i`
  font-size: 0.75rem;
`;

const StarCount = styled.strong`
  font-size: 0.75rem;
`;

const Stargazers = styled.span``;

export const Topic = ({ topic, clickHandler }) => {
  const { name, stargazerCount } = topic;
  return (
    <StyledTopic
      onClick={() => {
        clickHandler(name);
      }}
    >
      <TopicName>{name}</TopicName>
      <Stargazers>
        <Icon aria-label={`has ${stargazerCount} stargazers`}>⭐️</Icon>
        <StarCount>{stargazerCount}</StarCount>
      </Stargazers>
    </StyledTopic>
  );
};
