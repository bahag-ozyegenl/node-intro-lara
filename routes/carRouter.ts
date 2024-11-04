import {Router, Request, Response} from 'express'
import cars from '../data/carData'
import {carController} from '../controllers/carController'
import verifyCar from '../middleware/verifyCar'



const carRouter = Router()

carRouter.get(`/cars`, carController.getCars)

carRouter.get(`/cars/:carID`, carController.getCarById )


carRouter.post(`/cars`, verifyCar, carController.createNewCar )


carRouter.put(`/cars/:carID`, carController.updateCar)


carRouter.delete(`/cars/:carID`,carController.deleteCar )


export default carRouter

