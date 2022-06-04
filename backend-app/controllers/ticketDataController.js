const { request } = require("express");
const TicketData = require("../models/ticketReservation.js");

module.exports.createTicketData = async (req, res) => {
    try{
        let ticketData
        tickedData = new TicketData(req.body) // wszystkie dane z formularza;
        await ticketData.save();
        console.log(ticketData);
        res.send(ticketData);
    }catch(err){
        console.log(err);
        res.status(500).send('Wystąpił błąd', err)
    }
}

module.exports.getAllTicketData = async (req, res) => {
    try{
        const allTicketData = await TicketData.find();
        console.log(allTicketData)
        res.json(allTicketData)
    }catch(err){
        console.log(err);
        res.status(500).send('Wystąpił błąd', err)
    }
}