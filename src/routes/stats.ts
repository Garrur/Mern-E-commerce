import express from 'express';
import { adminOnly } from '../middlewares/auth.js';
import { getBarCharts, getDashboardStats, getLineCharts, getPieCharts } from '../controllers/stats.js';

const app = express.Router();

// route - /api/v!/dashboard/stats
app.get("/stats" ,adminOnly, getDashboardStats);


// route - /api/v!/dashboard/pie
app.get("/pie" ,adminOnly, getPieCharts);

// route - /api/v!/dashboard/bar
app.get("/bar",adminOnly, getBarCharts );

// route - /api/v!/dashboard/line
app.get("/line" ,adminOnly, getLineCharts);





export default app;