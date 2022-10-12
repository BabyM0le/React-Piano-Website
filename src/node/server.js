
const express = require('express')
const bodyParser = require('body-parser')
const fs = require('fs')
const path = require('path')
require('dotenv').config({
    path: path.resolve(__dirname, '.env')
})

const app = express()
const port = 8080
let contactInput = {}
let id = 0

app.use(bodyParser.urlencoded({ extended: true }))

app.post('/thank-you', (req, res) => {
    
    const now = new Date()
    const time = now.toLocaleTimeString();
    const date = now.toLocaleDateString("en-GB")

    contactInput = `{
        "id": ${id + 1},
        "date": "${date}",
        "time": "${time}",
        "name": "${req.body.name}",
        "email": "${req.body.email}",
        "number": "${req.body.number}"
    }`

    fs.writeFile('./src/node/contactFormData.json', contactInput, 'utf8', (err) => {
        if (err) {
            console.log('An Error has occured')
            return console.log(err)
        }
        console.log('JSON saved successfully')
    })

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

sendSMS('+17179877657', '+44812100100', 'Test')











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

