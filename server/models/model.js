var mongoose = require("mongoose");

var PetSchema = new mongoose.Schema({
    petName: {type: String, required: [true, "Pet name is required!"], minlength: [2, "Pet name must be a minimum of 2 characters!"]},
    petType: {type: String, required: [true, "Pet type is required!"], minlength: [3, "Pet type must be a minimum of 3 characters!"]},
    petBreed: {type: String, required: [true, "Pet breed is required!"], minlength: [3, "Pet breed must be a minimum of 3 characters!"]},
    petAge: {type: Number, required: [true, "Pet age is required!"]},
    petGender: {type: String, required: [true, "Pet gender is required!"]},
    petCharacteristics: {type: String, required: [true, "Pet characteristics is required!"]},
    petCoatLength: {type: String, required: [true, "Pet coat length is required!"]},
    petHouseTrained: {type: String, required: [true, "Pet house trained is required!"]},
    petPictureLink: {type: String, required: [true, "Pet picture link is required!"]},
    likes: {type: Number, default: 0},
}, {timestamps: true});

var UserSchema = new mongoose.Schema({
    firstName: {type: String, required: [true, "First name is required!"], minlength: [3, "First name must be a minimum of 3 characters!"]},
    lastName: {type: String, required: [true, "Last name is required!"], minlength: [3, "Last name must be a minimum of 3 characters!"]},
    //UNIQUE
    email: {type: String, required: [true, "Email is required!"], minlength: [3, "Pet description must be a minimum of 3 characters!"]},
    organization: {type: String},
    password: {type: String, required: [true, "Password is required!"], minlength: [8, "Password must be a minimum of 8 characters!"]},
    // confirmPassword: {type: String, required: [true, "Confirm password is required!"], minlength: [8, "Confirm password must be a minimum of 8 characters!"]},
    pets: [PetSchema],
}, {timestamps: true});

mongoose.model("Pet", PetSchema);
mongoose.model("User", UserSchema);