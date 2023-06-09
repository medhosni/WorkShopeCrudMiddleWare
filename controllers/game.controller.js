import Game from "../models/Game.model.js"


export function addGame(req,res){
 /*   Game.create({...req.body}).then(newGame=>{
        res.status(201).json(newGame)
    }) .catch(err =>{
        res.status(500).json({
            err :err
        })
    })
*/
const game = new Game(req.body)
req.files.forEach(Element=>game.photo.push(Element.filename) )
game.save()
.then(newGame=>{
    res.status(201).json(newGame)
}) .catch(err =>{
    res.status(500).json({
        err :err
    })
})

}
export function getAllGames(req,res){

    Game.find({})
    .then(games => {
        res.status(200).json(games)
    })
    .catch(err =>{
        res.status(500).json({
            err :err
        })
    })

}
export function deleteGame(req,res){

    Game.findByIdAndDelete({_id:req.body._id})
    .then(newGame=>{
        res.status(201).json(newGame)
    })
    .catch(err =>{
        res.status(500).json({
            err :err
        })
    })
}
export function updateGame(req,res){

    Game.findByIdAndUpdate({_id:req.body._id},{name :req.body.name})
    .then(newGame=>{
        res.status(201).json(newGame)
    }) .catch(err =>{
        res.status(500).json({
            err :err
        })
    })
}