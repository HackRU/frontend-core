import { CoreProvider } from "@hackru/frontend-core";
import Linker from "./Linker";
import Config from "./Config";

function App() {
    let i = 0;
    return (
        <CoreProvider Store={{
            logout: () => {
                i += 1;
                alert(i);
            }
        }} Linker={Linker}>
            {Config}
        </CoreProvider>
    );
}

export default App;
