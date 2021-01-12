const LINKER = {
    "MODULE-A": (id, text) => (<h1 id={id}>{text}</h1>),
    "MODULE-B": (id, text) => (<h2 id={id}>{text}</h2>),
    "MODULE-C": (id, text) => (<p id={id}>{text}</p>)
}

export default LINKER