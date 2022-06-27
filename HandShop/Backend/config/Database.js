import { Sequelize } from "sequelize";

const db = new Sequelize('db_handshop', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

export default db;