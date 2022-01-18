import {Request, Response} from 'express'

export const home = (req:Request, res:Response) =>{
    res.render('pages/pages')
}

export const dogs = (req:Request, res:Response) =>{
    res.send('dogs')
}

export const cats = (req:Request, res:Response) =>{
    res.send('cats')
    //res.render('pages/page')
}

export const fishes = (req:Request, res:Response) =>{
    res.send('fishes')
    //res.render('pages/page')
}