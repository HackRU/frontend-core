const LINKER = {
    "MODULE-A": (id, text, children) => (<h1 id={id}>{text}{children}</h1>),
    "MODULE-B": (id, text, children) => (<h2 id={id}>{text}{children}</h2>),
    "MODULE-C": (id, text, children) => (<p id={id}>{text}{children}</p>),
    "MODULE-D": (id, text, children) => (<div id={id}>{text}{children} </div>),
    "MODULE-E": (id, text, children) => (<a id={id} href={text}>{children}</a>)
}

export default LINKER