import { Schema, model } from 'mongoose';
import { Computer } from '../interface/computer';

const schema = new Schema({
    model: String,
    brand: String,
    so: String,
    ram: Number,
    rom: Number,
    year: Number,
    graphics: String,
},
{
    timestamps: false,
    versionKey: false
});

export default model("Computer", schema);