import "./App.css";
import Container from "./UI/Container";
import DisplayCounters from "./UI/DisplayCounters";
import Footer from "./UI/Footer";
import Header from "./UI/Header";
import WritingArea from "./UI/WritingArea";

function App() {
  return (
    <div className="App">
      <Header />
      <DisplayCounters />
      <WritingArea />
      <Container />
      <Footer />
    </div>
  );
}

export default App;
