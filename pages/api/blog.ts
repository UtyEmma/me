import axios from "axios"
import { NextApiRequest, NextApiResponse } from "next"

export default async function handler (req: NextApiRequest, res: NextApiResponse) {
    const url = "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@UtyEmma"
    
    const medium = await axios.get(url)
    const posts = medium.data.feed.items
    
    return res.status(200).json({ posts })
}