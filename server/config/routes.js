var controller = require("../controllers/controller.js");
var path = require("path");

module.exports = function(app){

    //Pet Schema
    app.get("/api/pets", controller.index);

    app.get("/api/pets/dogs", controller.dogs);

    app.get("/api/pets/cats", controller.cats);

    app.get("/api/pets/:id", controller.showPet);

    app.post("/api/pets", controller.addPet);

    app.put("/api/pets/:id", controller.editPet);

    app.delete("/api/pets/:id", controller.deletePet);

    app.get("/api/like/:id", controller.likePet);

    //User Schema
    app.post("/api/users", controller.addUser);

    app.post("/api/login", controller.login);

    //Angular Catch
    app.all("*", (req, res, next) => {
        res.sendFile(path.resolve("./public/dist/public/index.html"));
    });
}