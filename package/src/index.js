import React from "react";

const Main = (Linker, Config) => {
    return(
        <div>
            {Config.map((link) => Linker[link.module](0, link.param))}
        </div>
    );
}

export default Main;