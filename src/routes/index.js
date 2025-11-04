import express from 'express';
import loginRouter from './login.js';
import checkoutRouter from './checkout.js';
import dashboardRouter from './dashboard.js';

const router = express.Router();

router.get('/', (req, res) => {
    res.send('<h1>Hello, Playwright1!</h1>')
})

//router.use('/login', loginRouter);
//router.use('/checkout', checkoutRouter);
//router.use('/dashboard', dashboardRouter);

export default router;
