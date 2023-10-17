import OpenAI from 'openai';
import dotenv from "dotenv";
dotenv.config();

const apiKey = process.env.OPENAI_KEY;

const openai = new OpenAI({apiKey:apiKey});

export default openai;
