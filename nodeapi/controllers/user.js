import { User } from "../models/user.js";

export const getAllUsers = async (req,res) =>{

    const users = await User.find({})
    console.log(req.query);

    res.status(201).json({
        success: true,
        users,
    });
};

export const register = async (req,res) =>{

    const {name,email,password} = req.body;

    const users = await User.create({
        name,
        email,
        password,
    });

    res.status(201).json({
        success: true,
        message:"Registered Successfully"
    });
};

export const getUserDetails = async (req,res) => {
    const { id } = req.params;

    // const user = await User.findById(id);
    // console.log(req.params)
    console.log(id);
    res.json({
        success:true,
        User,
    });
};