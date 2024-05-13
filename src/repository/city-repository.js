//to interact with the model and DB.
const {City} =require('../models/index'); 

class CityRepository{
    async createCity({name}){//destructing the object
        try{
            const city=await City.create({name});
        return city;
        }catch(error){
            throw{error};
        }
    
    }

async deleteCity(cityId){
    try{
        await City.destroy({
            where:{
                id:cityId
            }
        });
    }catch(error){//trying to delete an entry that doesn't even exist.
        throw{error};
    }
}

}
module.exports=CityRepository;