import { NextApiRequest, NextApiResponse } from "next";
import nextConnect from "next-connect";
import mongo from "../config/database";
import fileParser from "../middleware/file-parser.middleware";
import formidable from "formidable";
import path from "path";
import multer from 'multer';



fileParser.post(async (req, res) => {
    console.log(req.files)
    const file = req.files.image.filename

    const data = Object.assign(req.body, {
        views: 0,
        clicks: 0,
        image: `/uploads/${file}`,
        ...mongo.timestamps
    }) 

    const project = await mongo.collection('projects').insertOne(data)
    
    return res.status(200).json({ 
        project
    })
});

export default fileParser;

export const config = {
  api: {
    bodyParser: false, // Disallow body parsing, consume as stream
  },
};