const {Movies} = require("./movies.model")


//Create
const createMovies=async(movieDetail)=>{
    const movies=await Movies.create(movieDetail);
    return movies;
}

//Read
const getAllMovies=async()=>{
    const allMovies=await Movies.findAll();
    return allMovies;
}

//Update
const updateMovies=async(movieId,movieDetail)=>{

    const updatedMovies=await Movies.update(movieDetail,{where:{id:movieId}});
    return updatedMovies;
}

const deleteMovies=async(movieId)=>{
    const movieDelete=await Movies.destroy({where:{id:movieId}});
    return movieDelete;
}




module.exports={createMovies,getAllMovies,updateMovies,deleteMovies}