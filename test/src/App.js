import { Renderer } from "@hackru/frontend-core";
import Linker from "./Linker";
import Config from "./Config";

function App() {
    return Renderer(Linker, Config);
}

export default App;
