require('dotenv').config({ path: '.env' })
export const Integrations = {
    LINK_API_URL: process.env.LINK_API_URL as string,
    LINK_API_USER: process.env.LINK_API_USER as string,
    LINK_API_PASSWORD: process.env.LINK_API_PASSWORD as string
}