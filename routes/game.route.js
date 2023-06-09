import express from "express"
import multer from "../middleware/multer.js"
import {addGame,
    deleteGame,
    getAllGames,
    updateGame} from "../controllers/game.controller.js"

    const rout = express.Router()

rout.route("/")
    .get(getAllGames)
    .post(multer("photo"),addGame)
    .patch(updateGame)
    .delete(deleteGame)

    export default rout