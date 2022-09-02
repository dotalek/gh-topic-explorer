import { TopicExplorer } from "./components/TopicExplorer";

const App = () => {
  return (
    <div className="App">
      <h1>GitHub Topic Explorer 🕵️</h1>
      <h2>Look for other topics related to your favourite project!</h2>

      <TopicExplorer />

      <footer>Made with ❤️ by Alek</footer>
    </div>
  );
};

export default App;
