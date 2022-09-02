import { TopicExplorer } from "./components/TopicExplorer";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <h1 className="app-title">GitHub Topic Explorer 🕵️</h1>
      <h2 className="app-subtitle">
        Look for other topics related to your favourite project!
      </h2>

      <TopicExplorer />

      <footer className="app-footer">Made by Alek with ❤️</footer>
    </div>
  );
};

export default App;
