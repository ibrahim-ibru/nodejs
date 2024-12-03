const http=require("http")
const fs=require("fs")
const url=require("url")
const { error } = require("console")

http.createServer((req,res)=>{
    const parsed=url.parse(req.url)
    fs.readFile("./pages"+parsed.pathname,(error,data)=>{
        if (error) {
            fs.readFile("./pages/error.html",(error,data=>{
                res.writeHead(200,{"Content-Type":"text/html"})
                res.write(data)
                res.end()
            }))
        }
        else{
            fs.readFile("./pages/home.html",(error,data=>{
                res.writeHead(200,{"Content-Type":"text/html"})
                res.write(data)
                res.end()
            }))
        }
    })
}).listen(3003,(req,res)=>{
    console.log("server Created Sucessfully ");    
})