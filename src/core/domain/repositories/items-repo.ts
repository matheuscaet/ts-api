import { IItem } from '../../../shared/interfaces/_index';
import Item from '../models/item';
import BSON = require('bson');
import { Service } from 'typedi';

@Service()
export class ItemsRepository{

    async getAllItems(): Promise<IItem[] | null> {
        return await Item.find({})    
    }
    
    async getItem(itemId : string) {
        return await Item.findOne({_id: itemId})
    }
    
    async   createItem(params: IItem) {
        let { name, desc } = params;
        return await Item.create({name: name, desc: desc})
    }
    
    async updateItem(params : IItem, itemId : string) {
        let { name, desc } = params;
        const id: BSON.ObjectId = new BSON.ObjectId(itemId);
    
        return await Item.findOneAndUpdate({_id: id}, {name: name, desc: desc})        
    }
    
    async deleteItem(itemId : string) {
        const id: BSON.ObjectId = new BSON.ObjectId(itemId);
        return await Item.findOneAndDelete({_id: id})
    }
    
}