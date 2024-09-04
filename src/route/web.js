import express from "express";
import homeController from '../controller/homeController';
let router = express.Router();

const initWebRoute = (app) => {
    router.get('/', homeController.getHomepage);
    router.get('/login', (req, res) => {
        res.render('login.ejs')
    })

    return app.use('/', router)
}
export default initWebRoute;
//module.exports = initWebRoute;