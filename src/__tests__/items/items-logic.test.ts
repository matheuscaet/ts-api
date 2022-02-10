import Container from 'typedi';
import { CREATED_ITEM_MOCK, ITEMS_MOCK, ITEM_MOCK } from './item-mock';
import { ItemsLogic } from '@domain/logic/_index';
import { ItemsRepository } from '@domain/repositories/items-repo';

describe('domain/items test suite', () => {
  describe('create cases', () => {
    test('should create a new item', async () => {
      ItemsRepository.prototype.createItem = jest.fn().mockImplementation(() => CREATED_ITEM_MOCK);
      const newItem = {
        name: "item name test",
        desc: "description item test"
      };

      const result = await Container.get(ItemsLogic).createItem(newItem);
      
      expect(result).toHaveProperty('item');
    });
  });

  describe('get cases', () => {
    test('should get all items', async () => {
      ItemsRepository.prototype.getAllItems = jest.fn().mockImplementation(() => ITEMS_MOCK);

      const result = await Container.get(ItemsLogic).getAllItems();

      expect(Array.isArray(result.items)).toEqual(true);
      result ? expect(result.items[0]).toHaveProperty('_id') : null;
    });

    test('should get a item by id', async () => {
      ItemsRepository.prototype.getItem = jest.fn().mockImplementation(() => ITEM_MOCK);
      const itemId = '620548dcca6df3b734fd8a0f';

      const result = await Container.get(ItemsLogic).getItem(itemId);

      expect(result).toHaveProperty('item');
      result ? expect(result.item._id).toBe(itemId): null;
    });

    test('should throw an error if try to get a item that does not exit', async () => {
      ItemsRepository.prototype.getItem = jest.fn().mockImplementation(() => null);
      const itemId = '620548dcca6df3b734fd8a0f';

      const result = await Container.get(ItemsLogic).getItem(itemId);

      expect(result).toBe(null);
    });
  });

  describe('update cases', () => {
    test('should update a item', async () => {
      ItemsRepository.prototype.updateItem = jest.fn().mockImplementation(() => CREATED_ITEM_MOCK);
      const itemId = '620548dcca6df3b734fd8a0f'
      const newItem = {
        name: "item name test",
        desc: "description item test"
      };

      const result = await Container.get(ItemsLogic).updateItem(newItem, itemId);

      expect(result).toHaveProperty('item');
      result ? expect(result.item._id).toBe(itemId): null;
    });

    test('should throw an error if try to update a item that does not exit', async () => {
      ItemsRepository.prototype.updateItem = jest.fn().mockImplementation(() => null);
      const itemId = '620548dcca6df3b734fd8a0f'
      const newItem = {
        name: "item name test",
        desc: "description item test"
      };

      const result = await Container.get(ItemsLogic).updateItem(newItem, itemId);

      expect(result).toBe(null);
    });
  });

  describe('delete cases', () => {
    test('should delete a item', async () => {
      ItemsRepository.prototype.deleteItem = jest.fn().mockImplementation(() => null);
      const itemId = '620548dcca6df3b734fd8a0f'

      const result = Container.get(ItemsLogic).deleteItem(itemId);

      expect(result).resolves.not.toThrow();
    });
  });
});
