// GLOBALS - NO WINDOW ( there is no window in node) !!

//_dirname - path to current directory
//__filename - file name
// require - function to use a module(Common JS)
// module - info about current module (file)
// process - info about env where the program is being executed

console.log(process)

setInterval(() => {
    console.log("hello")
}, 2000)