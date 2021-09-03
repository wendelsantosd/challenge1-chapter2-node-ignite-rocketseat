import { User } from '../../model/User'
import { IUsersRepository } from '../../repositories/IUsersRepository'

interface IRequest {
    user_id: string | string[]
}

class ListAllUsersUseCase {
    constructor(private usersRepository: IUsersRepository) {}

    execute({ user_id }: IRequest): User[] {
        const adminUser = this.usersRepository.findById(user_id)
        const users = this.usersRepository.list()

        if (adminUser.admin) {
            return users
        } else {
            throw new Error('no users')
        }
    }
}

export { ListAllUsersUseCase }
