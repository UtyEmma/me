import { NextApiRequest, NextApiResponse } from "next";
import mongo from "../config/database";

export default async function (
    req: NextApiRequest,
    res: NextApiResponse<any>
){
    const project = (await mongo.collection('projects')).insertOne(req.body)
    return res.status(200).json({ 
        project
    })
}