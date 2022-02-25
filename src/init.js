import "./db";
import "./models/Videos";
import "./models/User";
import app from "./server";

const PORT = 5000;

const handleListening = () => console.log(`Sexy http://localhost:${PORT}`);

app.listen(PORT, handleListening);
