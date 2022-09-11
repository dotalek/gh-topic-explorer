# GitHub Topic Explorer

React SPA to explore and navigate through GitHub's topics and related projects.

## How To Run

1. Clone the repository by your preferred method.
2. Run the following command on your terminal to set up all dependencies:

```
npm install
```

3. Rename `.env.example` to `.env` and set up your own GitHub PAT. The file should look like this:

```
VITE_GITHUB_ENDPOINT=https://api.github.com/graphql
VITE_GITHUB_PAT=your-pat-goes-here
```

4. Start the dev build by running the following command on the terminal:

```
npm run dev
```

5. While dev server is running, access on your browser through `localhost:5173`

---

## How to test

1. Clone the repository by your preferred method.
2. Run the following command on your terminal to set up all dependencies:

```
npm install
```

3. Run the following command to run unit tests:

```
npm run test
```

---

## Development Notes

I chose to use Vite to set up and build the app. It creates a new React app faster and more easily compared to Create React App(CRA). Furthermore, the app would only be engaging with an API and displaying the information on the client, so a backend to store data was not needed. Also, the ability to import stylesheets per component without rules conflicting with other styles makes it very comfortable to work on styling. Lastly, it has a much smaller initial space footprint compared to CRA.

Following that train of though of having an app that would onnly be interacting in a very limited way with an API, I figured that no routing would be necessary and a Single Page Application (SPA) would suffice and provide immediate, uninterrupted feedback to the user; remaining in the same screen and not having to go through re-renders of the entire or most of the page.

Additionally, having the application set up as an SPA means that it can potentially make it more easily deployable and efficient as the site has very little complexity to it and only requires to be set up in a web server with no additional configuration but provide the PAT to the API before the app is built.

The Apollo Client was used to set up the connection with GitHub's GraphQL API, as it provides ease of use to stablish the connection and authentication headers, and also provides a very convenient way to set up a connection client as part of a context and hook to it efortlessly inside the components that handle the querying.

---

## Future Improvements

---

### Code Structuring:

Due to the size of the app, the folder structure lacks a degree of organization; mainly for the components and their respective style sheets.

Components and styles can be improved upon by having dedicated directories for each of these file types, and can also be organized further inside by the components or sections they belong to.

The API connections can be delegated to their own folder as well, where they can be also include a directory that belongs to the respective API schemas and queries for that specific client.

Another option, if the application scales to such a big degree in its codebase, would be to contain all related logic for all components close to eachother; the component itself, its related stylesheet, and any unit tests.

---

### Refactoring

The way that the elements displayed in the [TopicsCollection](https://github.com/the-alek/gh-topic-explorer/blob/main/src/components/TopicsCollection.jsx) Component are built is quite cramped and hard to read. This logic could easily be extracted to a different file and imported back into the controller easily.

Another improvement upon that particular component would be to create a separate "TopicsSection" controller to be able generate more than one section for the entire collection more easily as opposed to hard coding the two separate sections; if needed, that is.

As previously mentioned in the last section, separating the GraphQL queries into their own file would make it much easier to navigate, identify and import the related queries for the API.

---

### Additional Features

A very obvious improvement would be to add filtering to the order of the related topics; either by name or amount of stargazers on that particular topic.

Following that logic, searching topics by their stargazer count would be useful to check on the most popular topics.

Another could be to keep track of the search history of the user locally by making use of local storage. This could also be displayed to the user and perhaps be also be used to go back and forth between previously explored topics.

In that same vein, being able to keep a list of "favourite" topics could help the user to keep track of the growing (or lack thereof) popularity of any given topic.

To improve upon the information displayed, an additional query could be performed upon the main/selected topic to display relevant or related repositories/projects that use that are tagged with that topic.

Adding the appropriate link to the topic on GitHub would be essential if we'd like to actually consume information about that particular topic. And, as mentioned before, a link to related repositories would also be a good addition for ease of access.

For this version routing was foregone. However, a case could be made for generating a dedicated space for displaying information about any given topic in a more vast way - like being able to include more information about the related repositories - in a much less cramped space.

This could also allow for SRE of this information and allow for SEO to be much more efficiently implemented if we would like to keep track of popularity and usage of the app.
