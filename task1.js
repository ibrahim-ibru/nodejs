const http=require("http")
const fs=require("fs")
const url=require("url")
http.createServer((req,res)=>{
    parsed=url.parse(req.url)
    fs.readFile("./pages"+parsed.pathname,(error,data)=>{
        if(error){
            fs.readFile("./pages/error.html",(error,data)=>{
                res.write(data)
                res.end()
            })
        }
        else{
            res.writeHead(200,{"Content-Type":"text/html"})
            res.write(data)
            res.end()
        }
    })
}).listen(3000,()=>{
    console.log("Server created");
    
})