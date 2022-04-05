import { MySqlUsersRepository } from "../repositories/implementations/MySqlUsersRepository"; 
import { MailTrapMailService } from "../services/implementations/MailTrapMailService";
import { CreateUserController } from "../useCases/CreateUser/CreateUserController";
import { CreateUserUseCase } from "../useCases/CreateUser/CreateUserUseCase";

const mysqlUsersRepository = new MySqlUsersRepository()
const mailtrapMailService = new MailTrapMailService()

const createUserUseCase = new CreateUserUseCase(
  mysqlUsersRepository,
  mailtrapMailService
)

const createUserController = new CreateUserController(
  createUserUseCase
)

export { createUserUseCase, createUserController }