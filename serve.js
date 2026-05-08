const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Backend Running Successfully");
});

app.post("/book", (req, res) => {

    console.log(req.body);

    res.json({
        message: "Booking Successful"
    });

});

app.listen(5000, () => {
    console.log("Server Started");
});