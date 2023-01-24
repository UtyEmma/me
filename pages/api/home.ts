// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next'
import { IProject } from '../../types/projects'
import { ProjectList } from './data/projects'

type Data = {
  projects: IProject[],
  posts: any
}



export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>) {
    const projects = ProjectList
    const url = "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@UtyEmma"
    
    const medium = await axios.get(url)

    const posts = medium.data
    
    res.status(200).json({ projects, posts })
}
