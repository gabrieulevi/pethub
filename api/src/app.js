import express from "express"

const app = new express;
app.use("/", (req, res) => {
    res.status(200).send("Hello World!")
})

export default app;