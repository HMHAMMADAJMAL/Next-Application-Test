import * as fs from 'fs';
export default function handler(req, res) {
  fs.readFile(`blogData/${req.query.slug}.json`, 'utf-8', (error, data) => {
    if (error) {
      res.status(500).json({ error: "Some Error has occured" })
    }
    console.log(req.query.slug)
    res.status(200).json(JSON.parse(data))
  })
}