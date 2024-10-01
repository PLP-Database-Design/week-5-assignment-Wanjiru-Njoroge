const express = require('express');
const app = express()
const mysql = require('mysql2')
const dotenv = require('dotenv')
dotenv.config();


// creating a connection to the database
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user:process.env.DB_USERNAME,
    password:process.env.DB_PASSWORD,
    database:process.env.DB_NAME

})
// test connection
db.connect((err) =>{
    if(err){
        return console.log('error connecting to the database:' , err)
    }
    return console.log('connected to the database successfully:', db.threadId)
})

// ejs
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

 //part1. Retrieve all patients
app.get('', (req, res) =>{
    const getPatients = 'SELECT * FROM patients'
     db.query(getPatients, (err, data) => {
        if(err){
            return res.status(400).send('failed to get patients')
        }
        // res.status(200).render('data', {data})
        res.status(200).send(data)
     })
})

//part 2
app.get('', (req, res) =>{
    const getproviders = 'SELECT   first_name, last_name, provider_specialty FROM providers'
     db.query(getproviders, (err, data) => {
        if(err){
            return res.status(400).send('failed to get providers')
        }
        // res.status(200).render('data', {data})
        res.status(200).send(data)
     })
})

//part 3
app.get('', (req, res) =>{
    const getPatients = 'SELECT first_name FROM patients'
     db.query(getPatients, (err, data) => {
        if(err){
            return res.status(400).send('failed to get patients')
        }
        // res.status(200).render('data', {data})
        res.status(200).send(data)
     })
})

//part 4
app.get('', (req, res) =>{
    const getproviders = 'SELECT   provider_id, provider_specialty FROM providers'
     db.query(getproviders, (err, data) => {
        if(err){
            return res.status(400).send('failed to get providers')
        }
        // res.status(200).render('data', {data})
        res.status(200).send(data)
     })
})
const PORT =    3000
app.listen(PORT, () =>{
    console.log(`server is running on http://localhost:${PORT}`)
})