var mongoose = require("mongoose");
var Pet = mongoose.model("Pet");
var User = mongoose.model("User");
var bcrypt = require("bcryptjs");

module.exports = {
    
    index: function(req, res){
        console.log("~Controller: index() initialized~");
        Pet.find({}, function(err, pets){
            if(err){
                res.json({message: "Error!", error: err});
            }else{
                res.json(pets);
            }
        })
    },

    dogs: function(req, res){
        console.log("~Controller: dogs() initialized~");
        Pet.find({petType: "Dog"}, function(err, dogs){
            if(err){
                res.json({message: "Error!", error: err});
            }else{
                res.json(dogs);
            }
        })
    },
    
    cats: function(req, res){
        console.log("~Controller: cats() initialized~");
        Pet.find({petType: "Cat"}, function(err, cats){
            if(err){
                res.json({message: "Error!", error: err});
            }else{
                res.json(cats);
            }
        })
    },

    showPet: function(req, res){
        console.log("~Controller: showPet() initialized~");
        Pet.findOne({_id: req.params.id}, function(err, ride){
            if(err){
                res.json({message: "Error!", error: err});
            }else{
                res.json(ride);
            }
        })
    },

    addPet: function(req, res){
        console.log("~Controller: addPet() initialized~", req.body);
        Pet.findOne({petName: req.body.petName}, function(err, pet){
            if(pet == null){
            Pet.create({petName: req.body.petName, petType: req.body.petType, petBreed: req.body.petBreed, petAge: req.body.petAge, petGender: req.body.petGender, petCharacteristics: req.body.petCharacteristics, petCoatLength: req.body.petCoatLength, petHouseTrained: req.body.petHouseTrained, petPictureLink: req.body.petPictureLink}, function(err, pet){
                if(err){
                    res.json(err);
                }else{
                    res.json({message: "Success!", added: true});
                }
            })
            }else{
                err = {message:"Duplicate pets not allowed!"}
                res.json(err);
            }
        })
    },

    editPet: function(req, res){
        console.log("~Controller: editPet() initialized~");
        Pet.findByIdAndUpdate(
            {_id: req.params.id},
            {$set: {petName: req.body.petName, petType: req.body.petType, petBreed: req.body.petBreed, petAge: req.body.petAge, petGender: req.body.petGender, petCharacteristics: req.body.petCharacteristics, petCoatLength: req.body.petCoatLength, petHouseTrained: req.body.petHouseTrained, petPictureLink: req.body.petPictureLink},
            }, {runValidators: true}, function(err, pet){
            if(err){
                res.json(err);
            }else{
                res.json({message: "Success!", pet: pet})
            }
        })
    },  

    deletePet: function(req, res){
        console.log("~Controller: deletePet() initialized~");
        Pet.remove({_id: req.params.id}, function(err){
            if(err){
                res.json({message: "Error!", error: err});
            }else{
                res.json({message: "Success!", removed: true});
            }
        })
    },

    likePet: function(req, res){
        console.log("~Controller: likePet() initialized~");
        Pet.findByIdAndUpdate(
            {_id: req.params.id},
            { $inc: { likes: 1 }},
            {new: true},
            function(err, pet){
                if(err){
                    res.json(err);
                }else{
                    res.json(pet);
                }
            }
        )
    },

    addUser: function(req, res){
        console.log("~Controller: addUser() initialized~");
        User.findOne({email: req.body.email}, function(err, foundUser){
            if(foundUser){
                res.json({message: "Email already registered!"});
            }else{
                bcrypt.hash(req.body.password, 8, function(err, hash){
                    if(err){
                        res.json(err);
                    }else{
                        req.body.password = hash;
                        User.create({firstName: req.body.firstName, lastName: req.body.lastName, email: req.body.email, organization: req.body.organization, password: req.body.password}, function(err, pet){
                            console.log(User);
                            if(err){
                                res.json(err);
                            }else{
                                res.json({message: "Success!", added: true});
                            }
                        })
                    }
                })
            }
        })
    },

    login: function(req, res){
        console.log("~Controller: login() initialized~");
        User.findOne({email: req.body.email}, function(err, foundUser){
            if(foundUser){
                bcrypt.compare(req.body.password, foundUser.password, function(err, result){
                    if(result == true){
                        res.json({message: "Success!", found: true});
                        req.session.userId = foundUser._id;
                        console.log(req.session.id);
                        console.log("Session:", req.session.userId);
                    }else{
                        res.json({message: "Invalid login credentials!"});
                    }
                })
            }else{
                res.json({message: "Invalid login credentials!"});
            }
        })
    }
}