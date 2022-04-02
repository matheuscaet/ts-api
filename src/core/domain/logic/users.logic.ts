import { UsersRepository } from "@domain/repositories/users.repo";
import { LinkApiClient } from "@shared/integrations/linkapi.integration";
import { iLinkItem } from "@shared/interfaces/iLinkApi";
import { IUser } from "@shared/interfaces/_index";
import { sleep } from "@shared/sleep";
import { setTimeout } from "timers/promises";
import { Service, Container } from 'typedi';

@Service()
export class UsersLogic{
    private userRepo : UsersRepository
    private userIntegration : LinkApiClient

    constructor(){
        this.userRepo = Container.get(UsersRepository);
        this.userIntegration = Container.get(LinkApiClient);
    }
    async getAllUsers() {
        return await this.userRepo.getAllUsers();
    }
    
    async getAllUsersFromApi() {
        await this.populateUsers().then(async users => {
            for (let user of users){
                await this.userIntegration.getUserInfo(user.id).then(async (userInfo) => {
                    const userContacts = await userInfo.userContacts.data.item;
                    const userAddress = await userInfo.userAddress.data.item[0];
 
                    let newUser : IUser = {
                        fullName: user.firstName+ ' ' + user.lastName,
                        email: user.email,
                        address: userAddress.street,
                        addressNumber: userAddress.number.$t,
                        phoneNumber: userContacts.phoneNumber
                    }
                    await this.createUser(newUser); 
                }); 
            }
        })
        return true
    }

    async populateUsers(){
        let page = 1;
        let users: iLinkItem[] = [];
        while (page <= 10){
            await this.userIntegration.getUsers(page,10).then(async (data) =>{ 
                let usersFound = data.data.usersList.item
                for (let user of usersFound){
                    users.push(user);
                }    
            })
            page++; 
        }
        return users
    }
    
    async getUser(userId: string) {
        return await this.userRepo.getUser(userId);
    }
    
    async createUser(params : IUser) {
        return await this.userRepo.createUser(params);
    }
    
    async updateUser(params : IUser, userId : string) {
        return await this.userRepo.updateUser(params, userId);
    }   
    
    async deleteUser(userId : string) {
        return await this.userRepo.deleteUser(userId);
    }
    
}