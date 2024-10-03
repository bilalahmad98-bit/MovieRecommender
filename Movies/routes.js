const express=require("express");
const { getAllMovies, createMovies, updateMovies, deleteMovies } = require("./movies");
const { createValidate, updateValidate } = require("./validations");

const router=express.Router();



router.get("/getAllMovies",async(req,res)=>{

    const movies=await getAllMovies();
    res.status(200).json({
        Movies:movies
    })

})

router.post("/createMovies",createValidate,async(req,res)=>{
   const movies=await createMovies(req.body);
   res.status(201).json({
    Movie:movies
   })

})

router.put("/updateMovies/:id",updateValidate,async(req,res)=>{
    const movies=await updateMovies(Number(req.params.id),req.body);
    res.status(200).json({
        Movie:movies
    })
})

router.delete("/deleteMovies/:id",async(req,res)=>{
    const movies=await deleteMovies(Number(req.params.id));
    res.status(200).json({
        Movie:movies
    })
})









module.exports=router;