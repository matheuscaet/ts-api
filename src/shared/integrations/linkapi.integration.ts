import axios from "axios";
import { Integrations } from '@config/env/_index'
import { Service } from "typedi";
import { 
    iLinkApiResponseUser, 
    iLinkApiResponseUserAddress, 
    iLinkApiResponseUserContacts 
} from "@shared/interfaces/iLinkApi";
import { sleep } from "@shared/sleep";
const parser = require("xml2json")
import rateLimit from 'axios-rate-limit';

@Service()
export class LinkApiClient {
    private linkapiClient;
    constructor(){
        this.linkapiClient = rateLimit(axios.create({
            baseURL: Integrations.LINK_API_URL,
            auth: { 
                username: Integrations.LINK_API_USER,
                password: Integrations.LINK_API_PASSWORD
            }, 
        }), { maxRequests: 1, perMilliseconds: 2500, maxRPS: 1 });
    }

    async getUsers(page: number, limit: number): Promise<iLinkApiResponseUser>{
        this.linkapiClient.setRateLimitOptions({ maxRequests: 1, perMilliseconds: 2500 })
        const users = await this.linkapiClient.get(`/users?page=${page}&limit=${limit}`);

        return await JSON.parse(parser.toJson(users.data));
    }
    
    async getUserAddress(userId: string): Promise<iLinkApiResponseUserAddress>{
        this.linkapiClient.setRateLimitOptions({ maxRequests: 1, perMilliseconds: 2500 })
        const userAddress = await this.linkapiClient.get(`/users/${userId}/address`);

        return await JSON.parse(parser.toJson(userAddress.data))
    }
    
    async getUserContacts(userId: string): Promise<iLinkApiResponseUserContacts>{
        this.linkapiClient.setRateLimitOptions({ maxRequests: 1, perMilliseconds: 2500 })
        const userContacts = await this.linkapiClient.get(`/users/${userId}/contacts`);
        return await JSON.parse(parser.toJson(userContacts.data))
    }
    
    async getUserInfo(userId: string): Promise<any>{
        const userAddress = await this.getUserAddress(userId)
        const userContacts = await this.getUserContacts(userId)

        return {userContacts, userAddress}
    }
}