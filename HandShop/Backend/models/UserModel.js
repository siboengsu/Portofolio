import { DataTypes, Sequelize } from "sequelize";
import db from "../config/Database.js";

const User = db.define('User',{
    name: {type: DataTypes.STRING},
    email: {type: DataTypes.STRING},
    password: {type: DataTypes.STRING},
    id_role: {type: DataTypes.INTEGER},
    status: {type: DataTypes.INTEGER},
    refresh_token: {type: DataTypes.TEXT}
},{
    // freezeTableName: true
});

export default User;
