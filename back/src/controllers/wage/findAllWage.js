const {wage}=require("../../db")

const findAllWage= async (req,res)=>{

    try{
        const findall=await wage.findAll();
        res.status(200).json(findall)
    }
    catch{
        res.status(400).json({ mensage: error.mensage })
    }


}

module.export=findAllWage;