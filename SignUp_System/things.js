var express = require('express')
var router = express.Router()

var chkDetail = require('./record.js')

router.get('/',function(req,res){
    res.render('sign_up',{name:'Sign Up'})
})

router.post('/',function(req,res){
    console.log(req.body)
    if(!req.body.name || !req.body.uName || !req.body.age || !req.body.pwd){
        res.render('sign_up',{name:'All field are required'})
    }
    res.send(chkDetail(req.body.name,req.body.uName,req.body.age,req.body.pwd)) 
})

module.exports = router