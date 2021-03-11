import { CoreProvider } from "@hackru/frontend-core";
import { Test } from "./testModule";

function App() {
    /* Test code to see if URL is being parsed correctly
    let url = window.location.search.substring(1)
    if(url) {
        let parsedURL = JSON.parse('{"' + decodeURI(url).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g,'":"') + '"}')
        console.log(parsedURL)
    } */
    let i = 0;
    return (
        <CoreProvider Store={{
            logout: () => {
                i += 1;
                alert(i);
            }
        }} Linker={{
            Test
        }}>
            {[
                {
                    module: "Test",
                    params: {
                        text: "an outer button",
                        garbage: "YAS"
                    },
                    children: [{
                        module: "Test",
                        params: {
                            text: "an inner button"
                        },
                        children: [],
                    }],
                },
                {
                    module: "Test",
                    params: {
                        text: "another outer button"
                    },
                    children: [],
                },    
                {
                    module: "this one doesn't exist",
                    params: {
                        text: "wrapped module",
                        garbage: "YAS"
                    },
                    children: [],
                }
            ]}
        </CoreProvider>
    );
}

export default App;
