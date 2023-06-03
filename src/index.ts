import express, { Request, Response, Express } from "express"
import { readJSONFile } from "./utils/fileUtils.js"
const app: Express = express()
const PORT = 3000


app.get("/books", (req: Request, res: Response) => {
  let startsWith = '';

  if (req.query?.startsWith) {
    startsWith = String(req.query.startsWith)
  }

  const { data: books } = readJSONFile('../data/books.json')

  res.status(200).json(books.filter(book => book?.name?.startsWith(startsWith)))
})

app.listen(PORT, () => {
  console.log(`The server is running on port ${PORT}`);
})