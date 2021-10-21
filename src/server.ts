import express, { Application } from "express";
const app: Application = express();

app.get("/", (req, res) => {
    const resl = doSomething("qsdf");
    res.json({
        message: "Base route"
    });
});

const doSomething = (test: string) => {
    return "somethign" + test;
};

doSomething("qfqs");

app.listen(3000, () => {
    console.log("Listening");
});