import React from "react";

const Test = (user, events, params)  => {
    return (
        <div>
            <div>
                {user.name + " "}
                {user.email}
            </div>
            {params.text}
        </div>
    )
}

// const module_definition = {
//     "expected_inputs": [
//         "user",
//         "events.logout"
//     ]
// }

// export { Test, module_definition };
export { Test };