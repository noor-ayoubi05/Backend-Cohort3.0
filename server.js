const express = require('express');
const app = express();
const port = 3000;

app.use(express())

let users = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
  ];


  app.get("/",(req,res)=>{
    res.send(users)
  })

  app.listen(port,()=>{
    console.log("Yes port is working")
  })