import http from "http"
import express, { Express, Router } from "express"
import morgan from "morgan"
import todosRoute from "./route/todo"


const router: Express = express();

router.use(morgan("dev"))
router.use(express.urlencoded({ extended: false }))
router.use(express.json())


router.use((req, res, next) => {
    // set the CORS policy
    res.header('Access-Control-Allow-Origin', '*');
    // set the CORS headers
    res.header('Access-Control-Allow-Headers', 'origin, X-Requested-With,Content-Type,Accept, Authorization');
    // set the CORS method headers
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'GET PATCH DELETE POST');
        return res.status(200).json({});
    }
    next()
})

router.use('/todos', todosRoute)

/** Error handling */
router.use((req, res, next) => {
    const error = new Error('not found');
    return res.status(404).json({
        message: error.message
    });
});

const httpServer = http.createServer(router); 
httpServer.listen(6000, () => console.log("Web Api is running"));