import { render, screen, waitFor } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import { TopicsCollection } from "../components/TopicsCollection";
import { GET_RELATED_TOPICS_BY_NAME } from "../api/githubQueries";
import { GraphQLError } from "graphql";

function createTopic(name, stargazerCount) {
  return {
    id: name,
    name,
    stargazerCount,
    __typename: "Topic",
  };
}

function attachRelatedTopics(mockedTopic) {
  return {
    ...mockedTopic,
    relatedTopics: [
      createTopic("angular", 45565),
      createTopic("vue", 50602),
      createTopic("svelte", 432),
    ],
  };
}

function createTopicWithRelated(name, stargazerCount) {
  return {
    topic: attachRelatedTopics(createTopic(name, stargazerCount)),
  };
}

function createTopicWithoutRelated(name, stargazerCount) {
  let mainTopic = createTopic(name, stargazerCount);
  mainTopic.relatedTopics = [];
  return mainTopic;
}

describe("Topics Collection component", () => {
  let mockedHandler;
  const mocks = [
    // Valid request with a search term
    {
      request: {
        query: GET_RELATED_TOPICS_BY_NAME,
        variables: {
          name: "react",
        },
      },
      result: {
        data: createTopicWithRelated("react", 77504),
      },
    },
    // Valid request with no related topics
    {
      request: {
        query: GET_RELATED_TOPICS_BY_NAME,
        variables: {
          name: "no-related",
        },
      },
      result: {
        data: {
          topic: createTopicWithoutRelated("no-related", 0),
        },
      },
    },
    // Valid request with empty search term
    {
      request: {
        query: GET_RELATED_TOPICS_BY_NAME,
        variables: {
          name: "",
        },
      },
      result: {
        data: {
          topic: null,
        },
      },
    },
    // Network Error
    {
      request: {
        query: GET_RELATED_TOPICS_BY_NAME,
        variables: {
          name: "network-error",
        },
      },
      error: new Error("Network Error"),
    },
  ];

  beforeEach(() => {
    mockedHandler = vi.fn();
  });

  it("shows loading UI while fetching data", async () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <TopicsCollection searchTerm={"react"} clickHandler={mockedHandler} />
      </MockedProvider>,
    );
    const loadingHeading = await screen.findByText(/Loading/i);
    expect(loadingHeading).toBeInTheDocument();
  });

  it("shows missing results UI with an empty term", async () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <TopicsCollection searchTerm={""} clickHandler={mockedHandler} />
      </MockedProvider>,
    );
    const noMainHeading = await screen.findByText(/No main/i);
    const noRelatedHeading = await screen.findByText(/No related/i);
    expect(noMainHeading).toBeInTheDocument();
    expect(noRelatedHeading).toBeInTheDocument();
  });

  it("shows a heading and section for each topic category", async () => {
    const { container } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <TopicsCollection searchTerm={"react"} clickHandler={mockedHandler} />
      </MockedProvider>,
    );

    const mainHeading = await screen.findByText(/The main/i);
    const relatedHeading = await screen.findByText(/The related/i);
    const sections = container.querySelectorAll("section.collection-section");

    expect(mainHeading).toBeInTheDocument();
    expect(relatedHeading).toBeInTheDocument();
    sections.forEach((section) => expect(section).toBeInTheDocument());
    expect(sections.length).toEqual(2);
  });

  it("shows missing results UI if there's no related topics", async () => {
    const { container } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <TopicsCollection
          searchTerm={"no-related"}
          clickHandler={mockedHandler}
        />
      </MockedProvider>,
    );

    const mainHeading = await screen.findByText(/The main/i);
    const noRelatedHeading = await screen.findByText(/No related/i);
    const sections = container.querySelectorAll("section.collection-section");

    expect(mainHeading).toBeInTheDocument();
    expect(noRelatedHeading).toBeInTheDocument();
    sections.forEach((section) => {
      expect(section).toBeInTheDocument();
    });
    expect(sections.length).toEqual(1);
  });

  it("should show error UI on undefined errors", async () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <TopicsCollection searchTerm={"error"} clickHandler={mockedHandler} />
      </MockedProvider>,
    );
    const errorHeading = await screen.findByText(/Error/i);
    expect(errorHeading).toBeInTheDocument();
  });

  it("should show error UI on network errors", async () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <TopicsCollection
          searchTerm={"network-error"}
          clickHandler={mockedHandler}
        />
      </MockedProvider>,
    );
    const errorHeading = await screen.findByText(/Error/i);
    expect(errorHeading).toBeInTheDocument();
  });

  it.todo("should show error UI on GraphQL errors");

  it.todo("snapshot tests");
});
