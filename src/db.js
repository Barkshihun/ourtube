import mongoose from "mongoose";

mongoose.connect("mongodb://127.0.0.1:27017/wetube");

const handleOpen = () => console.log("✔ Connecting to DB!");
const handleError = (error) => console.log("❌ DB error\n", error);
const db = mongoose.connection;
db.on("error", handleError);
db.once("open", handleOpen);
