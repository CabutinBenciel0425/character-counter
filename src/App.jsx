import Counter from "./components/Counter";
import Textbox from "./components/Textbox";
import { CharacterCountProvider } from "./context/CharacterCount";
import "./styles.css";
function App() {
  return (
    <CharacterCountProvider>
      <div className="app">
        <Textbox />
        <Counter />
      </div>
    </CharacterCountProvider>
  );
}

export default App;
