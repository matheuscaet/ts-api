import axios from 'axios';
import { Integrations } from '@config/env/_index';
import { Service } from "typedi";
import fs from 'fs';
import { StringMap } from 'ts-jest';
const FormData = require('form-data');

@Service()
export class GoFileClient {
    private gofileClient;
    constructor(){
        this.gofileClient = axios.create({
            baseURL: Integrations.GOFILE_API_URL,
            headers: {
                Authorization: Integrations.GOFILE_API_KEY,
                'content-type': 'application/x-www-form-urlencoded'
              },
        });
    }

    async getServer(): Promise<any>{
      const config = {
        data: {
          token: Integrations.GOFILE_API_KEY
        }
      }
      const serverResponse = await axios.get('https://api.gofile.io/getServer', config);
      return await serverResponse.data;
    }
    
    async uploadFile(file: string, folderId: StringMap, server: string): Promise<any>{
        const form = new FormData();
        form.append('token', Integrations.GOFILE_API_KEY);
        form.append('file', fs.createReadStream(file));
        form.append('folderId', folderId)

        const serverResponse = await axios.post(`https://${server}.gofile.io/uploadFile`, form, { headers: form.getHeaders() });
        
        return await serverResponse.data;
    }
    
    async createFolder(folderName: string): Promise<any>{
        const config = {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            }
          }
        const params = new URLSearchParams();
        params.append('token', Integrations.GOFILE_API_KEY);
        params.append('parentFolderId', Integrations.GOFILE_API_ROOT_FILE_ID);
        params.append('folderName', folderName);

        const serverResponse = await axios.put('https://api.gofile.io/createFolder', params, config);
        
        return await serverResponse.data;
    }

    async deleteContent(contentsId: string): Promise<any>{
        const config = {
          data: {
            contentsId: contentsId,
            token: Integrations.GOFILE_API_KEY
          }
        }
        const serverResponse = await axios.delete('https://api.gofile.io/deleteContent', config);
        return await serverResponse.data;
    }
}