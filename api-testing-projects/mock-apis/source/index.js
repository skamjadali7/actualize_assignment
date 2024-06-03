const express = require('express');
const app = express();
const PORT = 8080;
// Defining my mock API routes below
app.use(express.json)

const users = [];

app.post('/users/register',(req,res)=>{
    const {username,email,password} = req.body;

    const existinuser = users.find((user)=> user.email === email);

    if(existinuser) {
        return res.status(409).json({error:'this email has been earlier used'})
    }
    const userId = 'mockUserId'
    users.push({userId,username,email});

    res.status(201).json({userId,message:'User registered successfully for book online shop'})

})

app.listen(PORT,()=>{
    console.log('server running on posrt ${PORT}')
})
