import { CoreProvider } from "@hackru/frontend-core";
import LINKER from "./Linker";
import CONFIG from "./Config";

function App() {
    let i = 0;
    return (
        <CoreProvider Store={{
            logout: () => {
                i += 1;
                alert(i);
            }
        }} Linker={LINKER}>
            {CONFIG}
        </CoreProvider>
    );
}

export default App;
