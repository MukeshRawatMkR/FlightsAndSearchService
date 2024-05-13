const express=require("express");
const bodyParser=require("body-parser");
// const {City} =require('./models/index'); 
const{PORT}=require('./config/serverConfig');
const CityRepository=require('./repository/city-repository');


const setupAndStartServer=async()=>{
    //create the express object.
const app=express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.listen(PORT, async()=>{
    console.log(`server started at ${PORT}`);
    // console.log(process);
    // console.log(City);
    /* await City.create({
        name:"New Delhi",
     })*/
    /*const repo=new CityRepository();
    repo.createCity({name: "Dehradun"});
    */
});

}


setupAndStartServer();