const notes = require("express").Router();
const {readFromFile, readAndAppend} = require("../helpers/fsUtils")
const uuid = require("../helpers/uuid");

notes.get("/", (req, res) => {
    console.info(`${req.method} request received for notes.`)
    readFromFile("./db/db.json").then((data)=>res.json(JSON.parse(data)));
});

notes.post("/", (req, res) => {
    console.info(`${req.method} request received for notes.`)
    const {title, text} = req.body;
    if(req.body) {
        const newNotes = {
            title,
            text,
            id: uuid(),
        }
        readAndAppend(newNotes, "./db/db.json");
        res.json("Notes added successfully.");
    } else {
    res.errored("Error for adding notes.");
    }
});

module.exports = notes;