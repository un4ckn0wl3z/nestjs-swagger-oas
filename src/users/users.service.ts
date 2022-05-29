import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    private users: User[] = [{ id: 0, name: 'Anuwat'}, { id: 1, name: 'Pansa'}, { id: 2, name: 'Ingon'}]

    findAll(name?: string): User[] {
        if(name){
            return this.users.filter(user => user.name === name)
        }
        return this.users;
    }

    findById(userId: number): User {
        return this.users.find(user => user.id === userId);
    }

    createUser(createUserDto: CreateUserDto): User {
        const newUser = {id: Date.now(), ...createUserDto}
        this.users.push(newUser);
        return newUser;
    }
}
