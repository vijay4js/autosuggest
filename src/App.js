import { getCounties, countries } from "./mocks/countries";
import AutoComplete from "./components/AutoComplete";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <AutoComplete options={countries} />
      <div>Test</div>
    </div>
  );
}
