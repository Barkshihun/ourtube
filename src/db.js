import mongoose from "mongoose";

mongoose.connect(process.env.DB_URL);

const handleOpen = () => console.log("✔ Connecting to DB!");
const handleError = (error) => console.log("❌ DB error\n", error);
const db = mongoose.connection;
db.on("error", handleError);
db.once("open", handleOpen);
