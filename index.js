const fs=require('fs')
const http=require('http')

const server=http.createServer()
server.on("request",(req,res)=>{
    const stream=fs.ReadStream("index.html")
    stream.pipe(res)
  
})
server.listen(5000,console.log("server is listening on port 5000"))