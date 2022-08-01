import express from "express";
import {client} from "../index.js"

const router =express.Router();

router.get('/', async function (req, res) {
    if(req.query.rating){
      req.query.rating=+req.query.rating;
    }
    console.log(req.query);
    const movies = await client.db("guvi").collection("movies").find(req.query).toArray(); 
  
    // console.log("Movies :"+movies);
    res.send(movies);
  })
 router.get('/:id', async function (req, res) {
    const {id} = req.params;
    
    console.log(req.params,id)
    // const movie =movies.find((mv)=>mv.id===id);
    // res.send(movie);
  
  const movie= await client.db("guvi").collection("movies").findOne({id:"102"})
  
    movie ? res.send(movie) : res.status(404).send({msg:"Movie not found"});
  })
  
router.post('/', async function (req, res) {
    const data= req.body;
  console.log(data);
  const result = await client.db("guvi").collection("movies").insertMany(data);
    res.send(result);})
    
    router.delete('/:id', async function (req, res) {
      const {id} = req.params;
      
      console.log(req.params,id)
  
    const movie= await client.db("guvi").collection("movies").deleteOne({id:"101"})
    
      movie.deletedCount>0 ? res.send(movie) : res.status(404).send({msg:"Movie not found"});
    })
  
    router.put('/:id', async function (req, res) {
      const {id} = req.params;
      console.log(req.params,id)
      const data=req.body;
  
      const result = await client.db("guvi").collection("movies").updateOne({id:id},{$set:data});
    res.send(result);
      
    })

    export const moviesRouter=router;