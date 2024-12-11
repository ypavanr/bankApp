import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import db from "../src/index.js";
const register= async(req, res) => {
    const { name,accountNo, email, password, phone, birthdate,accountType,address } = req.body;
    console.log('Received registration data:', { name,accountNo, email, password, phone, birthdate,accountType,address });
    if (!name || !email || !password || !phone || !birthdate||!accountType||!address) {
        return res.status(400).send({ error: 'All fields are required!' });
    }
    const Emailexist= await db.query("SELECT * FROM users WHERE email=$1",[email,]);
    const accountNoexists=await db.query("SELECT * FROM users WHERE account_number=$1",[accountNo,]);
    const PhoneNoexists=await db.query("SELECT * FROM users WHERE phone_number=$1",[phone,])
    if(Emailexist.rows.length>0){
        res.status(401).send({ message: "email already exists, Please log in." });
    }
   else if(accountNoexists.rows.length>0){
        res.status(401).send({ message:"Account Number already exists. Please log in" });
    }
    else if(PhoneNoexists.rows.length>0){
        res.status(401).send({ message:"Phone Number already exists. Please log in" });
    }
    else{
        const saltRounds=10;
        bcrypt.hash(password,saltRounds,async(err,hash)=>{
            if(err){
                console.log("error hashing password:",err);
            }
            else{await db.query("INSERT INTO users (full_name,email,phone_number,password_hash,date_of_birth,address,account_number,account_type) VALUES ($1,$2,$3,$4,$5,$6,$7,$8)",[name,email,phone,hash,birthdate,address,accountNo,accountType,])
                res.status(200).send({ message: 'User registered successfully!' });}
            
        })
        
    }
   
};
const login= async(req, res) => {
    const { email, password } = req.body;
    console.log('Received login data:', { email, password});
    if ( !email || !password ) {
        return res.status(400).send({ error: 'All fields are required!' });
    }
    const exist=await db.query("SELECT * FROM users WHERE email=$1",[email,]);
    if(exist.rows.length>0){
        const hashedPassword=exist.rows[0].password_hash;
        console.log(hashedPassword)
        bcrypt.compare(password,hashedPassword,(err,result)=>{
            if(err){
                console.log("error comparing password",err)
            }
            else{
                if(result){
                    res.status(200).send({ message: 'User login successfully!' });
                }
                else{
                    res.status(401).send({message: 'invalid credentials'})
                }
            }
        })
    }
    else{
        res.status(401).send({message:'email doesnt exist. please register'})
    }
};
export {register,login};