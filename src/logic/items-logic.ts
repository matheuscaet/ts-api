import { ItemsRepository } from "../repositories/items-repo";
import { IItem } from "../interfaces/_index";
import { Service, Container } from 'typedi';

@Service()
export class ItemsLogic{
    private itemRepo : ItemsRepository

    constructor(){
        this.itemRepo = Container.get(ItemsRepository);
    }
    async getAllItems() {
        return await this.itemRepo.getAllItems();
    }
    
    async getItem(itemId: string) {
        return await this.itemRepo.getItem(itemId);
    }
    
    async createItem(params : IItem) {
        return await this.itemRepo.createItem(params);
    }
    
    async updateItem(params : IItem, itemId : string) {
        return await this.itemRepo.updateItem(params, itemId);
    }   
    
    async deleteItem(itemId : string) {
        return await this.itemRepo.deleteItem(itemId);
    }
    
}