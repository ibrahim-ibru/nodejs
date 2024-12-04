const http=require("http")
const fs=require("fs")
const url=require("url")
// http.createServer((req,res)=>{
//     const parsed=url.parse(req.url)
//     // console.log(req);
//     fs.readFile("./pages"+parsed.pathname,(error,data)=>{
//         if (error) {
//             res.writeHead(404,{"Content-Type":"text/html"})
//             res.end("Error page not found")
//         }
//         else{
//             res.writeHead(200,{"Content-Type":"text/html"})
//             res.write(data)
//             res.end()
//         }
//     })
    
// }).listen(3001,()=>{
//     console.log("server created");
// })

http.createServer((req,res)=>{
    const parsed=url.parse(req.url)
    fs.readFile("./pages"+parsed.pathname,(error,data)=>{
        if(error){
            res.writeHead(404,{"Content-Type":"text/html"})
            res.end()
        }else{
            res.writeHead(200,{"Content-Type":"text/html"})
            res.write(data)
            res.end()
        }
    })
}).listen(3000,()=>{
    console.log("server Created")
})