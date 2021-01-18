import React from "react";

const renderer = (Linker, Config) => {
    const _recurseRenderer = (Linker, Config) => {
        return Config.map((link, index) => Linker[link.module](index, link.params, _recurseRenderer(Linker, link.children)))
    }
    return(
        <div>
            {_recurseRenderer(Linker, Config)}
        </div>
    );
}

export default renderer