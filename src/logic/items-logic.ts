import { ItemsRepository } from "../repositories/items-repo";
import { IItem } from "../interfaces/_index";
import { Service, Container } from 'typedi';

@Service()
export class ItemsLogic{

    async getAllItems() {
        return await Container.get(ItemsRepository).getAllItems();
    }
    
    async getItem(itemId: string) {
        return await Container.get(ItemsRepository).getItem(itemId);
    }
    
    async createItem(params : IItem) {
        return await Container.get(ItemsRepository).createItem(params);
    }
    
    async updateItem(params : IItem, itemId : string) {
        return await Container.get(ItemsRepository).updateItem(params, itemId);
    }   
    
    async deleteItem(itemId : string) {
        return await Container.get(ItemsRepository).deleteItem(itemId);
    }
    
}