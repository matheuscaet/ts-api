require('dotenv').config({ path: '.env' })
export const Integrations = {
    GOFILE_API_KEY : process.env.GOFILE_API_KEY as string,
    GOFILE_API_URL : process.env.GOFILE_API_URL as string,
    GOFILE_API_ROOT_FILE_ID: process.env.GOFILE_API_ROOT_FILE_ID as string,
}