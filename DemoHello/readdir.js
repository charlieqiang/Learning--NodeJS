const fs=require('fs')
//asyn read
fs.readdir('./h',(err,data)=>{
    console.log(err)
    console.log(data)
})