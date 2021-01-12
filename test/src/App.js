import render from "@hackru/frontend-core";
import Linker from "./Linker";
import Config from "./Config";

function App() {
    return (
        render(Linker, Config)
    );
}

export default App;