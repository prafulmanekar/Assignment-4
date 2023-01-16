const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const port = 3000
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());


app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
// your code goes here
app.get('/',(req,res)=>{
    res.send('Hello000 World');
})
//Addition
app.post('/add',(req,res)=>{
    // res.send('Hello000 World');
   const num1=req.body.num1;
   const num2=req.body.num2;
  //validating num1 and num2
   if(isNaN(num1)||isNaN(num2)){
    res.status(400).json({ status: 'Failure',
            message: 'Provide numeric value',
         })
   }
   else if(num1===""||num2===""){
    res.status(400).json({ status: 'Failure',
            message: 'Provide Valid Input',
         })
   }
   
//    let sum=0;
   res.json({ status: 'success',
            message: 'the sum of given two numbers',
            sum : num1+num2
         })
})
//Subtract
app.post('/sub',(req,res)=>{
    // res.send('Hello000 World');
   const num1=req.body.num1;
   const num2=req.body.num2;
  //validating num1 and num2
   if(isNaN(num1)||isNaN(num2)){
    res.status(400).json({ status: 'Failure',
            message: 'Provide numeric value',
         })
   }
   else if(num1===""||num2===""){
    res.status(400).json({ status: 'Failure',
            message: 'Provide Valid Input',
         })
   }
   
//    let difference=0;
   res.json({ status: 'success',
            message: 'the difference of given two numbers',
            difference : num1-num2
         })
})
//Multiply
app.post('/multiply',(req,res)=>{
    // res.send('Hello000 World');
   const num1=req.body.num1;
   const num2=req.body.num2;
  //validating num1 and num2
   if(isNaN(num1)||isNaN(num2)){
    res.status(400).json({ status: 'Failure',
            message: 'Provide numeric value',
         })
   }
   else if(num1*num2>1000000){
    res.status(400).json({ status: 'Failure',
            message: 'Overflow',
         })
   }
   else if(num1*num2<-1000000){
    res.status(400).json({ status: 'Failure',
            message: 'Underflow',
         })
   }
   
   else if(num1===""||num2===""){
    res.status(400).json({ status: 'Failure',
            message: 'Provide Valid Input',
         })
   }
   
//    let product=0;
   res.json({ status: 'success',
            message: 'the product of given two numbers',
            product: num1*num2
         })
})
//Divide
app.post('/divide',(req,res)=>{
    // res.send('Hello000 World');
   const num1=req.body.num1;
   const num2=req.body.num2;
  //validating num1 and num2
   if(isNaN(num1)||isNaN(num2)){
    res.status(400).json({ status: 'Failure',
            message: 'Provide numeric value',
         })
   }
   else if(num1==0||num2==0){
    res.status(400).json({ status: 'Failure',
    message: 'Cannot divide by zero',
 })
   }
   else if(num1===""||num2===""){
    res.status(400).json({ status: 'Failure',
            message: 'Provide Valid Input',
         })
   }
   
   res.json({ status: 'success',
   message: 'The division of given numbers',
   result: num1/num2 })
})
app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;