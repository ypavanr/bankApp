import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import cors from "cors";
import env from "dotenv";
const app=express()
env.config()
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors({
    origin:process.env.CORS_ORIGIN_URL
}));
app.listen(3000,()=>{
    console.log("server listening on port 3000")
})
const db = new pg.Client({
    user: process.env.PG_USER,
    host: process.env.PG_HOST,
    database: process.env.PG_DATABASE,
    password:process.env.PG_PASSWORD,
    port: process.env.PG_PORT,
  });
  db.connect().then(()=>{
    console.log("connected to database")
  })

  app.post('/register', (req, res) => {
    const { name,accountNo, email, password, phone, birthdate,accountType } = req.body;
    console.log('Received registration data:', { name,accountNo, email, password, phone, birthdate,accountType });
    if (!name || !email || !password || !phone || !birthdate) {
        return res.status(400).json({ error: 'All fields are required!' });
    }
    res.status(200).json({ message: 'User registered successfully!' });
});
app.post('/login', (req, res) => {
    const { email, password } = req.body;
    console.log('Received login data:', { email, password});
    if ( !email || !password ) {
        return res.status(400).json({ error: 'All fields are required!' });
    }
    res.status(200).json({ message: 'User login successfully!' });
});