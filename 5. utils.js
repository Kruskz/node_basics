// Modules (A large code is split into modules)
// in Common Js every file is a module by default
// modules -- encapsulated code (only share minimum)

const names = require('./4-names')

const sayHi = (name) => {
    console.log(`Hello ${name}`)
}

sayHi(names.dutta)
sayHi(names.susan)
sayHi(names.john)

//This shows the export of objects of a module and importing them 
// to another module 

//i can also use the method of import and export like we do in react
// then we will have to change the type from common js to module
// in package json file