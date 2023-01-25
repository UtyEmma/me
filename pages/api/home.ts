// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next'
import { IExperience } from '../../types/experience'
import { IPosts } from '../../types/posts'
import { IProject } from '../../types/projects'
import { ISkill } from '../../types/skills'
import { Experience } from './data/experience'
import { ProjectList } from './data/projects'
import { Skills } from './data/skills'

type Data = {
  projects: IProject[],
  posts: IPosts[]
  skills: ISkill[]
  experience: IExperience[]
}



export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>) {
    const projects = ProjectList
    const url = "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@UtyEmma"
    
    const medium = await axios.get(url)

    const posts = medium.data

    const skills = Skills
    const experience = Experience
    
    res.status(200).json({ projects, posts, skills, experience })
}
