import express from "express";
import { GoogleTranslator } from "@translate-tools/core/translators/GoogleTranslator/index.js";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const translator = new GoogleTranslator();

app.post("/translate", (req, res) => {
  console.log(req.body.text);
  translator
    .translate(req.body.text, "en", "hi")
    .then((response) => {
      res.status(200).send({ result: response });
    })
    .catch((err) => {
      res.status(500).send({ error: err });
    });
});

app.get("/", (req, res) => {
  res.send("It's working");
});

app.listen(8000, () => {
  console.log("Server is running");
});
