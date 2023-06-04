import express, { Request, Response, Express, NextFunction } from "express"
import { readJSONFile } from "./utils/fileUtils.js"
const app: Express = express()
const PORT = 3000


app.get("/books", (req: Request, res: Response, next: NextFunction) => {

  try {
    let startsWith = '';

    if (req.query?.startsWith) {
      startsWith = String(req.query.startsWith)
    }

    const { data: books } = readJSONFile('../data/books.json')

    res.status(200).json(books.filter(book => book.name.startsWith(startsWith)))
  } catch (e) {
    next(e);
  }
})

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ error: err.message });
});

app.listen(PORT, () => {
  console.log(`The server is running on port ${PORT}`);
})