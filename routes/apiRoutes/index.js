
const db = require('../../models');
const mongoose = require('mongoose');
function apiRoutes(app) {
    app.get('/api/workouts', function(req,res){
        db.Workout.find().then(function(dbWorkout){
            res.json(dbWorkout);
        })
    })
    app.post('/api/workouts', function(req,res){
        db.Workout.create({}).then(function(dbWorkout){
            res.json(dbWorkout);
        })
    })

    app.put('/api/workouts/:id', function(req,res){
        const id =  mongoose.Types.ObjectId(req.params.id)  
        db.Workout.findOneAndUpdate(
            { _id: id }, 
            { $push: { exercises: req.body  } },
           function (error, success) {
                 if (error) {
                     console.log(error);
                 } else {
                     console.log(success);

                     res.json(success)
                 }
             });
    })

    app.get('/api/workouts/range', function(req,res){
        db.Workout.find().then(function(dbWorkout){
            res.json(dbWorkout);
        })
    })


}

module.exports = apiRoutes;