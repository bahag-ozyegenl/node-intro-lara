import express, {NextFunction, Request, Response} from 'express'
import carRouter from './routes/carRouter'
import 'dotenv/config'

// console.log(`Welcome to our API`)

const PORT = process.env.PORT
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended : true}))

app.use('/api', carRouter)


const middleware = (req : Request, res: Response, next: NextFunction) => {
    console.log(`this is the middleware`)
    next()
}

const secondMiddleware = (req : Request, res: Response, next: NextFunction) => {
    console.log(`second middleware`)
    next()
}



app.get('/', middleware, secondMiddleware, (request : Request, response: Response) => {
    response.send(`Welcome to my API`)
})



app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
