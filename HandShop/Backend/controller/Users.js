import Users from "../models/UserModel.js";
import bcrypt from "bcrypt";

export const getUsers = async(req, res) => {
    try {
        const users = await Users.findAll()
        res.json(users);
    } catch (error) {
        console.log(error);
    }
}

export const regUsers = async(req, res) => {
    const { name, email, password, confPassword, id_role, status } = req.body;
    if(password !== confPassword) return res.status(400).json({msg: "Password is not same"});
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password, salt);
    try {
        await Users.create({
            name: name,
            email: email,
            password: hashPassword,
            id_role: id_role,
            status: status
        });
        res.json({msg: "Register is succsessfully"})
    } catch (error) {
        console.log(error)
    }
}
