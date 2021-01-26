const LINKER = {
    "MODULE-A": (id, params, children) => (<h1 id={id}>{params.text}{children}</h1>),
    "MODULE-B": (id, params, children) => (<h2 id={id}>{params.text}{children}</h2>),
    "MODULE-C": (id, params, children) => (<p id={id}>{params.text}{children}</p>),
    "MODULE-D": (id, params, children) => (<div id={id}>{params.text}{children} </div>),
    "MODULE-E": (id, params, children) => (<a id={id} href={params.href}>{children}</a>)
}

export default LINKER