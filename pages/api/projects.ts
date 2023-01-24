import { NextApiRequest, NextApiResponse } from "next"
import { IProject } from "../../types/projects"
import { ProjectList } from "./data/projects"

interface Data {
    projects: IProject[]
}

export default async function handler (
    req: NextApiRequest,
  res: NextApiResponse<Data>) {
    const projects = ProjectList
    
    res.status(200).json({ projects })
}