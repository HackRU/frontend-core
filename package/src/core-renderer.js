import React from "react";


const renderer = (Linker, Config) => {

    const recursiveRender = (Linker, Config) => {
        return Config.map((link, index) => Linker[link.module](index, link.params, recursiveRender(Linker, link.children)))
        
    }

    return(
        <div>
            {recursiveRender(Linker, Config)}
        </div>
    );

}



export default renderer;