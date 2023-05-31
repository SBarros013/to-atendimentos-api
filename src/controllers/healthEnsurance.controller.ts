import { Request, Response, NextFunction } from 'express';
import { HealthEnsuranceDTO } from '../dtos/healthEnsurance.dto';


export default class HealthEnsuranceController {

    public getHealthEnsurances = async (req: Request, res: Response, next: NextFunction) => {
    
        const healthEnsurances: HealthEnsuranceDTO[] = [
            {
                id: "1",
                name: "Clinipam",
                value: 30
            },
            {
                id: "2",
                name: "unimed",
                value: 35
            },
        ]
    
        return res.status(200).json({
            data: healthEnsurances
        });
    };

}