require('dotenv').config({ path: '.env' });
export const App = {
    PORT: parseInt(process.env.PORT as string),
    URLMONGO: process.env.URLMONGO as string,
    NAMESPACE: process.env.NAMESPACE as string,
}