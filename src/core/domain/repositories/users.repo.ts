import { IUser } from '@shared/interfaces/_index';
import User from '@domain/models/users.model';
import BSON = require('bson');
import { Service } from 'typedi';

@Service()
export class UsersRepository{

    async getAllUsers(): Promise<any> {
        return await User.find({})    
    }
    
    async getUser(userId : string): Promise<any> {
        return await User.findOne({_id: userId})
    }
    
    async createUser(params: IUser) {
        return await User.create(params)
    }
    
    async updateUser(params : IUser, userId : string) : Promise<any> {
        const id: BSON.ObjectId = new BSON.ObjectId(userId);
    
        return await User.findOneAndUpdate({_id: id}, params)        
    }
    
    async deleteUser(userId : string) {
        const id: BSON.ObjectId = new BSON.ObjectId(userId);
        await User.deleteOne({_id: id})
    }
    
}