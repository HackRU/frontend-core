import React from "react";

const module = (user, events, properties, children)  => {
    return (
        <div>
            Hello World
        </div>
    )
}

module_definition = {
    "expected_inputs": [
        "user",
        "events.logout"
    ]
}

export { module, module_definition };