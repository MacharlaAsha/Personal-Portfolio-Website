const express = require("express");
const router = express.Router();

const Contact = require("../models/Contact");

// Save contact message
router.post("/", async (req, res) => {

    const contact = new Contact(req.body);

    await contact.save();

    res.json({
        message: "Message saved successfully"
    });

});

// View all messages
router.get("/", async (req, res) => {

    const contacts = await Contact.find();

    res.json(contacts);

});

module.exports = router;
