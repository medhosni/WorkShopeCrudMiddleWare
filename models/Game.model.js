import mongoose from "mongoose";

const {model,Schema} = mongoose

const GameSchema = new Schema({
    name :String,
    decription :{type :String },
    photo : [String] 
},{timestamps :true})

export default model("Game",GameSchema)