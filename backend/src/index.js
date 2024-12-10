import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import cors from "cors";
const app=express()
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors({
    origin:'http://localhost:5173'
}));
app.listen(3000,()=>{
    console.log("server listening on port 3000")
})
const db = new pg.Client({
    user: "postgres",
    host: "localhost",
    database: "bank",
    password:"pgsql",
    port: 5432,
  });
  db.connect().then(()=>{
    console.log("connected to database")
  })

  app.post('/register', (req, res) => {
    // Collect the data from the request body
    const { name, email, password, phone, birthdate } = req.body;

    // Log the received data (for testing purposes)
    console.log('Received registration data:', { name, email, password, phone, birthdate });

    // Perform further processing (e.g., validate inputs, store data in a database)
    if (!name || !email || !password || !phone || !birthdate) {
        return res.status(400).json({ error: 'All fields are required!' });
    }

    // Simulate successful data storage
    res.status(200).json({ message: 'User registered successfully!' });
});
