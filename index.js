const express=require("express");
const app=express();
const sequelize=require("./sequelize/config");
const bodyParser = require("body-parser");
const {Movies, UsersPreferences} = require("./Movies/movies.model");
const movieRoutes=require("./Movies/routes");
const users=require("./Movies/userRoutes");


sequelize.authenticate().then(async()=>{
    await sequelize.sync();
    await Movies.sync();
    await UsersPreferences.sync();
    

    console.log("Database Connection Established");
}).catch((error)=>{
    console.log("Error in Database Connection",error);
})


app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use("/movies",movieRoutes);
app.use("/UserPreferences",users)



app.listen(3010,()=>{
    console.log("App started on port 3010");
})