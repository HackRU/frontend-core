import Linker from "./Linker";
import Config from "./Config";

const render = (Linker, Config) => {
    return(
        <div>
            {Config.map((link) => Linker[link])}
        </div>
    );
}

function App() {
    return (
        render(Linker, Config)
    );
}

export default App;