import { FirstInput } from "./components/FirstTask/FirstInput";
import { SecondInput } from "./components/FirstTask/SecondInput";
import "./App.css";
import { Selector } from "./components/SecondTask/Selector";

function App() {
  return (
    <div className="main_div">
      <b>First Task</b>
      <FirstInput />
      <SecondInput />
      <b>Second Task</b>
      <Selector limit={3} placeholder="3" />
      <Selector limit={10} placeholder="10" />
    </div>
  );
}

export default App;
