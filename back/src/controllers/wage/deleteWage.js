const {wage}=require("../../db")


const delateWage=async(req,res)=>{
    try{
        const {id}=req.params
        await wage.destroy({
            where:{
                id
            },
        });

        res.status(200).json({sucess:true})
    }
    catch{
        res.status(400).json()
    }
}