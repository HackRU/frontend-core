import React from "react";
import { CoreModule } from "@hackru/frontend-core";

const Test = CoreModule(({ text, logout, children }) => {
    return (
        <div>
            <button
                onClick={() => {
                    logout();
                }}>
                    {text}{children}
            </button>
        </div>
    );
}, ["text", "logout"]);

export { Test };
