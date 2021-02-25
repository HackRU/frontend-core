import React from "react";

const renderer = (Linker, Config) => {
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
    return(
        <div>
            {recursiveRender(Linker, Config, "root")}
        </div>
    );
};

export default renderer;