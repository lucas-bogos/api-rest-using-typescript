import { application } from "./app"
import  { config } from "dotenv";config()

const { PORT, HOST } = process.env

const server = application.listen(PORT || 3000, () => {
  console.log(`Server working in http://${HOST}:${PORT}`)
})

process.on("SIGINT", () => {
  server.close()
  console.log("\nApplication finished!")
})