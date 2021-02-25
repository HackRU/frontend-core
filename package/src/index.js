/**
 * @hackru/frontend-core Core library dependencies defining application rendering chain
 */
import React from "react";

let _store = {};

const CoreProvider = ({ Store, Linker, children }) => {
    const recursiveRender = (Linker, Config, NestedRoot) => {
        return Config.map((link, index) => {
            let currentId = `${NestedRoot}--${link.module}--${index}`;
            if (Linker[link.module]) {
                return Linker[link.module](
                    currentId, // id
                    link.params, // configuration parameters,
                    recursiveRender(Linker, link.children, currentId) // children components
                );
            } else {
                return (
                    <div key={currentId}>Error: Module {link.module} does not exist</div>
                )
            }
        });
    }
    // populate the _store object with the default defined stores
    _store = Store;
    return recursiveRender(Linker, children, "root")
};

const CoreModule = (ReactComponent, ExpectedInputs) => {
    return (id, params, children) => {
        // resolve parameters
        let properties = {
            __render_id: id
        }; // create a properties dictionary object with default parameters
        for (let i = 0; i < ExpectedInputs.length; i++) {
            let key = ExpectedInputs[i];
            // resolve inputs from the given configuration
            if (params[key]) {
                properties[key] = params[key];
            }
            // override the given configuration parameters with the store objects
            if (_store[key]) {
                properties[key] = _store[key];
            }
            // todo: override the given configuration parameters with url parameters
        }
        // render the component
        return (
            <div key={id} id={id}>
                <ReactComponent {...properties}>{children}</ReactComponent>
            </div>
        );
    };
};

export { CoreModule, CoreProvider };