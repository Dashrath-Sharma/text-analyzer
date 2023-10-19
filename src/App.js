import "./App.css";
import DisplayCounters from "./UI/DisplayCounters";
import Header from "./UI/Header";
import WritingArea from "./UI/WritingArea";

function App() {
  return (
    <div className="App">
      <Header />
      <DisplayCounters />
      <WritingArea />
    </div>
  );
}

export default App;
