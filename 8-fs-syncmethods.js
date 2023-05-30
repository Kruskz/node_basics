const {readFileSync , writeFileSync, read} = require('fs')

first = readFileSync('./content/first.txt' , 'utf-8')
writeFileSync('./content/second.txt' , 'Hello i added this afterwards')
console.log(first);
second = readFileSync('./content/second.txt', 'utf-8')
console.log(second);
// write file sync overwrites over the already present content