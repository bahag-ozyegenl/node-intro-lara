import express, {NextFunction, Request, Response} from 'express'

const verifyCar = (req : Request, res: Response, next: NextFunction) : any => {
    const { brand, year, model } = req.body
    if(!brand || !year || !model){
        return res.json({message : `Please provide informations about the car`})
    }
    next()
}

export default verifyCar