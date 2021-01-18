import React from "react";


const render = (Linker, Config) => {
    return Config.map((link, index) => Linker[link.module](index, link.params.text, render(Linker, link.children)))
    
}

const Main = (Linker, Config) => {
    return(
        <div>
            {render(Linker, Config)}
        </div>
    );
}

export default Main;