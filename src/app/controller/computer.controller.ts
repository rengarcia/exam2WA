import { Request, Response } from 'express';
import computerSchema from '../model/computer.model';
import { Computer } from '../interface/computer';

export const getAll = async (req: Request, res: Response) => {
    try {
        const computers = await computerSchema.find();
        return res.status(200).json(computers);
    } catch (error:any) {
        return res.status(500).json({
            message: "Error",
            error: error.message
        });
    }
}

export const post = async (req: Request, res: Response) => {
    try {
        const computer: Computer = req.body;
        const response = await computerSchema.create(computer);
        return res.status(200).json(response);
    } catch (error:any) {
        return res.status(500).json({
            message: "Error",
            error: error.message
        });
    }
}

