import express from 'express'
import connectDB from './config/database.js';

const app = express();

const PORT = process.env.PORT || 3000;

connectDB();

app.get('/', (req, res)=>{
    res.json({
        success: true
    })
})

app.listen(PORT, ()=>{
    console.log(`Backend Server Listening on port ${PORT}`)
})