const express=require("express")
const app=express()
const port=4000
const sqlite3 = require("sqlite3").verbose()
const db=new sqlite3.Database("database.db")
const cors = require("cors")
let sql

app.use(cors())

sql="SELECT * FROM books"


app.get("/",(req,res)=>{
    db.all(sql,[],(err,rows)=>{
        if(err){
            console.log(err.message)
        }
        res.json(rows)
})})

app.listen(port,()=>{
    console.log(port)
})