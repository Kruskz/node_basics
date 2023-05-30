const {readFile, writeFile, read, write} = require('fs')

readFile('./content/first.txt', 'utf-8', (err , result) => {
    if(err){
        console.log(err.message);
    }
    const first = result;
    readFile('./content/second.txt' , 'utf-8', (err, result) => {
        if(err){
            console.log(err.message);
        }
        const second = result;
        writeFile('./content/third.txt' , `developed by write method: ${first} and ${second}`, (err ,result) => {
            if(err){
                console.log(err.message);
            }
            console.log(result);
        })
    })
})

