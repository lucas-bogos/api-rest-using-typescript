import express from "express"
import cors from "cors"
import logger from "morgan"
import { router } from "./routes"

export const application = express()

// configuration of middlewares
application.use(express.json())
application.use((request, reply, next) => {
  reply.header("Access-Control-Allow-Origin", "http://127.0.0.1:4000")
  reply.header("Access-Control-Allow-Methods", "GET,PUT,PATCH,POST,DELETE")
  application.use(cors())
  next()
})
application.use(logger("dev"))
application.use("/", router)