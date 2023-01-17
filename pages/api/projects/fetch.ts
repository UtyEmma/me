
import { NextApiRequest, NextApiResponse } from "next";
import mongo from "../config/database";

export default async function (req: NextApiRequest, res: NextApiResponse) {
    const collect = mongo.collection('projects').find().limit(4);
    const projects = await collect.toArray();

    return res.status(200).json({
        projects
    });
}