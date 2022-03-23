import "dotenv/config";
import "./db";
import "./models/Video";
import "./models/User";
import "./models/Comment";
import app from "./server";

const PORT = 5000;

const handleListening = () => console.log(`Sexy http://localhost:${PORT}`);

app.listen(PORT, handleListening);
