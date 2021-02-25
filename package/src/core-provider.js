import React from "react";
import Renderer from "./core-renderer";

let _store = {};

const Provider = ({ Store, Linker, children }) => {
    _store = Store;
    return Renderer(Linker, children);
};

export { Provider, _store };