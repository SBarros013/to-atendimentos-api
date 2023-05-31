import express from 'express';
import HealthEnsuranceController from '../controllers/healthEnsurance.controller';
const router = express.Router();

const controller = new HealthEnsuranceController();

router.get('/health-ensurance', controller.getHealthEnsurances);

export = router;