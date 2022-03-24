import "dotenv/config";
import regeneratorRuntime from "regenerator-runtime";
import "./db";
import "./models/Video";
import "./models/User";
import "./models/Comment";
import app from "./server";

const PORT = process.env.PORT || 5000;

const handleListening = () => console.log(`Sexy http://localhost:${PORT}`);

app.listen(PORT, handleListening);
