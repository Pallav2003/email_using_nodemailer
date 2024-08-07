const express = require("express");
const dotenv = require("dotenv");
const emailRoutes = require("./routes/emailRoutes");

const app = express();
dotenv.config();

const cors = require("cors");
const corsOptions = {
  origin: "https://email-using-nodemailer-app.vercel.app",
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.use(express.json());

app.use("/email", emailRoutes);

app.get("/", (_, res) => {
  res.send("Hello World!");
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
