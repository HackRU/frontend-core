/**
 * @hackru/frontend-core Module wrapper
 */
import React from "react";
import { _store } from "./core-provider";

const wrapper = (ReactComponent, ExpectedInputs) => {
    return (id, params, children) => {
        // resolve parameters
        let properties = {};
        for (let i = 0; i < ExpectedInputs.length; i++) {
            let key = ExpectedInputs[i];
            if (params[key]) {
                properties[key] = params[key];
            }
            if (_store[key]) {
                properties[key] = _store[key];
            }
        }
        // render the component
        return (
            <div key={id} id={id}>
                <ReactComponent {...properties}>{children}</ReactComponent>
            </div>
        );
    };
};

export default wrapper;
