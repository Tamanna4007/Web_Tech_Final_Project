const express = require('express');
const Router = express.Router();
const Club = require('../models/club')

Router.get('/',(err,res)=>{
    res.render('index')
})

// create / insert data

Router.post('/add',(req,res)=>{
    const flightnum = req.body.flightnum;
    const flightdur = req.body.flightdur;
    const flightdes = req.body.flightdes;
    const flightsou = req.body.flightsou;
    const flightdate = req.body.flightdate;
    const flighttime = req.body.flighttime;

   //  console.log()

  const club = new Club({
       flightnum,
       flightdur,
       flightdes,
       flightsou,
       flightdate,
       flighttime
   })
   club.save(err=>{
       if(err){
           console.log("err is ")
       }else{
           res.redirect('/')
       }
   })
})

// find data 

Router.get('/show',(req,res)=>{
    Club.find((err,docs)=>{
        if(err) throw err;
       
        res.render('show',{
            flight : docs
        })
        
    })
})

// update data

Router.get('/edit/:id',(req,res)=>{
    // console.log(req.params.id)

    Club.findOneAndUpdate({_id: req.params.id},req.body,{new:true},(err,docs)=>{
        if(err){
            console.log("cant update")
        }else{
            res.render('edit',{flightdata:docs})
        }
    })
})

Router.post('/edit/:id',(req,res)=>{
    Club.findByIdAndUpdate({_id:req.params.id},req.body,(err,docs)=>{
        if(err){
            console.log("err")
        }else{
            res.redirect('/show')
        }
    })
})

// Del data 

Router.get('/delete/:id',(req,res)=>{
    Club.findByIdAndDelete({_id:req.params.id},req.body,(err,docs)=>{
        if(err){
             console.log("Err is")
         }else{
             console.log("Delted")
             res.redirect('/show')
         }
    })
})



module.exports = Router;