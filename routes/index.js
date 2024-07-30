const router = require("express").Router();
const notesR = require("./notes.js");
router.use("/notes", notesR);
module.exports = router;