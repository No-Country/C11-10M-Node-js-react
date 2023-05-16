const {wage}= request("../../db")


const findWageByID= async(req,res)=>{


    try{    
        const id=req.params;
        const find=await wage.findOne({
            where:{
                id
            }
            
        });
        res.status(200).json(find);}
    catch{
        res.status(400).json({ message: err.message });
    }

}