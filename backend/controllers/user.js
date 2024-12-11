import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"
const register= (req, res) => {
    const { name,accountNo, email, password, phone, birthdate,accountType } = req.body;
    console.log('Received registration data:', { name,accountNo, email, password, phone, birthdate,accountType });
    if (!name || !email || !password || !phone || !birthdate) {
        return res.status(400).json({ error: 'All fields are required!' });
    }
    res.status(200).json({ message: 'User registered successfully!' });
};
const login= (req, res) => {
    const { email, password } = req.body;
    console.log('Received login data:', { email, password});
    if ( !email || !password ) {
        return res.status(400).json({ error: 'All fields are required!' });
    }
    res.status(200).json({ message: 'User login successfully!' });
};
export {register,login};