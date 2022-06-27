import express from "express";
import db from "./config/Database.js";
import router from "./routes/index.js";
    // contoh membuat database dengan syntax 
    // import Users from "./models/UserModel.js"; 

const app = express();

try {
    await db.authenticate();
    console.log('Connection has been established successfully.');
    // await Users.sync();
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

app.use(express.json());
app.use(router);

app.listen(5000, () => console.log('Server running at port 5000'))