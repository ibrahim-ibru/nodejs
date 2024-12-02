const { ifError } = require("assert")
const { error, log } = require("console")
const fs=require("fs")
// const {writeFile,appendFile}=require("fs")

// // fs.writeFile("word.txt","hai team ",(error)=>{
// //     if(error){
// //         console.log("Error!!!!!");
// //     }
// // })

// appendFile("word.txt","take a rest",(error)=>{
//     if(error){
//         console.log("Error!!!!!");
//     }
// })
// writeFile("word.txt","hai team ",(error)=>{
//     if(error){
//         console.log("Error!!!!!");
//     }
// })

// fs.appendFile("word.txt"," hai",(ero)=>{
//     if(ero){
//         console.log("Error!!!!!!");
//     }
// })

// fs.readFile("word.txt","utf-8",(error,data)=>{
//     if(error){
//         console.log("error!!!!!!!");
//     }
//     else{
//         console.log(data);
//     }
// })


const url=require("url")

// const result=url.parse("http://127.0.0.1:3000/index.html")
// console.log(result);

const http=require("http")

const app= http.createServer((req,res)=>{
    res.end("hello team")
})

app.listen(3000)