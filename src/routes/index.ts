import { Router } from "express"
import { createUserController } from "../main"

const router = Router()

router.post("/users", (request, reply) => {
  return createUserController.handle(request, reply)
})

export { router }