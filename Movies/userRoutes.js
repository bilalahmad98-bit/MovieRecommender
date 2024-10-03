const express=require("express");
const { getMoviesOnPreferences, createUserPreference } = require("./Users");

const router=express.Router();


router.get("/getMoviePreferences/:userid",async(req,res)=>{
    const userMovies=await getMoviesOnPreferences(Number(req.params.userid));
      res.status(200).json({
        "movies":userMovies
      })
})

router.post("/setMoviePreferences",async(req,res)=>{

const movies=await createUserPreference(req.body);
res.status(201).json({
    userData:movies
})

})

module.exports=router;