import express, { Request, Response, Express } from "express"

const app: Express = express()
const PORT = 3000


app.listen(PORT, () => {
  console.log(`The server is running on port ${PORT}`);
})