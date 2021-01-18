import Login from "./Login";
import { ModuleWrapper } from "@hackru/frontend-core";

const LINKER = {
    "Login": (rawConfig) => (<ModuleWrapper config={rawConfig}>{Login}</ModuleWrapper>),
    "MODULE-A": (id, params, children) => (<h1 id={id}>{text}{children}</h1>),
    "MODULE-B": (id, params, children) => (<h2 id={id}>{params}{children}</h2>),
    "MODULE-C": (id, params, children) => (<p id={id}>{params}{children}</p>),
    "MODULE-D": (id, params, children) => (<div id={id}>{params}{children} </div>),
    "MODULE-E": (id, params, children) => (<a id={id} href={params}>{children}</a>)
}

export default LINKER

{
    "login_user": () => {

    }
}