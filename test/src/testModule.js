import React from "react";
import { CoreModule } from "@hackru/frontend-core";

const Test = CoreModule(({ text, logout }) => {
    return (
        <div>
            <button
                onClick={() => {
                    logout();
                }}>
                    {text}
            </button>
        </div>
    );
}, ["text", "logout"]);

export { Test };
