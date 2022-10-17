
const express = require('express')
const bodyParser = require('body-parser')
const fs = require('fs')
const path = require('path')
require('dotenv').config({
    path: path.resolve(__dirname, '.env')
})
const nodemailer = require('nodemailer');

const app = express()
const port = 8080








app.use(bodyParser.urlencoded({ extended: true }))

app.post('/thank-you', (req, res) => {
    
    const now = new Date()
    const time = now.toLocaleTimeString();
    const date = now.toLocaleDateString("en-GB")



    fs.readFile('./src/node/id.txt', 'utf8', (err) => {
        if (err) {
            console.log('An Error has occured')
            return console.log(err)
        }
        console.log(`id is ${data}`)
    })





    // fs.writeFile('id.txt', contactInput, 'utf8', (err) => {
    //     if (err) {
    //         console.log('An Error has occured')
    //         return console.log(err)
    //     }
    //     console.log('JSON saved successfully')
    // })


    contactInput = {
        id: 1,
        date: date,
        time: time,
        name: req.body.name,
        email: req.body.email,
        number: req.body.number
    }

    res.send('<h1>Thank you for contacting</h1>')
})

app.listen(port, () => {
    console.log(`Node running on port: ${port}`)
})














// Twilio
const accountSid = process.env.TwilioAccountSid
const authToken = process.env.TwilioAuthToken
const client = require('twilio')(accountSid, authToken)

function sendSMS(twilioNumber, outGoingNumber, body) {
    client.messages.create({
        to: '+447466818068',
        from: '+17179877657',
        body: 'test',
    }).then(message => console.log(message.sid))
}

// sendSMS('+17179877657', '+44812100100', 'Test')




// Nodemailer
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.NodeMailerEmail,
        pass: process.env.NodeMailerPassword
    }
})

let mailOptions;

mailOptions = {
    from: process.env.NodeMailerEmail,
    to: 'padmanathantom@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
}

// transporter.sendMail(mailOptions, function(error, info){
//     if (error) {
//         console.log(error);
//     } else {
//         console.log('Email sent: ' + info.response);
//     }
// })









// const accountSid = process.env.TwilioAccountSid
// const authToken = process.env.TwilioAuthToken
// const client = require('twilio')(accountSid, authToken)


// function sendSMS(twilioNumber, outGoingNumber, body) {
//     client.messages.create({
//         to: outGoingNumber,
//         from: twilioNumber,
//         body: body,
//     }).then(message => console.log(message.sid))
// }


// sendSMS('+17179877657', '+44812100100', 'Test')

