import express from "express";
import router from "./routes/users.js";

export const app = express();

//using middleware
app.use(express.json());
app.use("/users",router);
  
app.get("/", (req,res) =>{
    res.send("Nice working");
});

//post: body , get: params, when we use colon use params othewise use query
//in case of question mark
