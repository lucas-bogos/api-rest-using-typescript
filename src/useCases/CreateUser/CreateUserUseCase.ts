import { User } from "../../entities/User"
import { IUsersRepository } from "../../repositories/IUsersRepository"
import { IMailService } from "../../services/IMailService"
import { ICreateUserRequestDTO } from "./CreateUserDTO"

export class CreateUserUseCase {
  constructor(
   private usersRepository: IUsersRepository,
   private mailService: IMailService
  ) {}

  async execute(data: ICreateUserRequestDTO) {
    // check if user has inside of the database
    const alreadyExists = await this.usersRepository.findByEmail(data.email)
    // return error for user when to exists user
    if(alreadyExists) throw new Error("User already exists")
    // get data users with data: ICreateUserRequestDTO
    const user = new User(data)
    // abstraction to saving
    await this.usersRepository.save(user)
    // send by mail
    await this.mailService.sendMail({
      to: {
        name: data.name,
        email: data.email
      },
      from: {
        name: "Lucas Bogos",
        email: "bogoslucas1@gmail.com"
      },
      subject: "Seja bem-vindo!",
      body: "<p>Você já pode fazer login na plataforma.</p>"
    })
  }
}