const { where } = require("sequelize");
const { UsersPreferences, Movies } = require("./movies.model")


const createUserPreference=async(preferences)=>{
    const user=await UsersPreferences.create(preferences);
    return user;

}

const getMoviesOnPreferences=async(userid)=>{
    const user=await UsersPreferences.findOne({id:userid});
    const movie=await Movies.findAll({where:{genre:user.genre, rating:user.rating}});
    return movie;

}

module.exports={createUserPreference,getMoviesOnPreferences};