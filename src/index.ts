import  express from "express";
import routes from "./routes";

require('dotenv').config({ path: '.env' })


const app = express();
app.use(express.json())
app.use(routes);

app.listen(process.env.PORT, () => { 
    console.log(`server running at ${process.env.PORT} port`);
})
