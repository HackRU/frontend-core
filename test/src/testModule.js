import React from "react";

const Test = (defaults, params, Profile) => {
    console.log(defaults, params, Profile);
    return (
        <div>
            <div>
                {defaults.user.name + " "}
                {defaults.user.email}
            </div>
            {params.text}
            <button
                onClick={() => {
                    Profile.logout();
                }}
            >
                Qwerty
            </button>
        </div>
    );
};

export { Test };
