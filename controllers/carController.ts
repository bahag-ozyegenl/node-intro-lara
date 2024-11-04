import cars from '../data/carData'
import { Request, Response } from 'express'


export const carController = {

    getCars: (req: Request, res: Response): any => {
        try {
            if (cars) {
                return res.json(cars)
            }
            return res.json({ message: `No car found` })
        }
        catch (err) {
            console.log(err)
            res.status(500).json({ message: `Internal server error 🔴` })
        }
    },

    getCarById: (req: Request, res: Response): any => {
        try {
            const carID = parseInt(req.params.carID)
            const carByID = cars.find(car => car.id == carID)
            if (!carByID) {
                res.json({ message: `No car found` })
            }
            res.json(carByID)
        }
        catch (err) {
            res.json(err)
        }
    },

    createNewCar: (req: Request, res: Response) : any => {
        const { brand, year, model } = req.body
        try{
            
            const newCar = {
                id: cars.length + 1,
                brand,
                year,
                model
            }
            cars.push(newCar)
            res.json(cars)
        }
        catch (err) {
            console.log(err)
            res.status(500).json({ message: `Internal server error 🔴` })
        }
    },



    updateCar: (req: Request, res: Response): any => {
        const carID = parseInt(req.params.carID)
        const { brand, year, model } = req.body
        try {
            let carById: any = cars.find(car => car.id === carID)
            if (!carById) {
                res.status(404).json(`No car found`)
            }
            carById.brand = brand || carById.brand
            carById.year = year || carById.year
            carById.model = model || carById.model
            res.json(carById)

        }
        catch (err) {
            console.log(err)
            res.status(500).json({ message: `Internal server error 🔴` })
        }
    },

    deleteCar: (req : Request, res : Response) : void  => {
        const carID = parseInt(req.params.carID)
        const carIndex = cars.findIndex(car => car.id === carID )
        if(carIndex == -1){
            res.json({message : `Car not found`})
            return
        }
        cars.splice(carIndex, 1)
        res.json({message : `Car has been deleted`})
    }


}


