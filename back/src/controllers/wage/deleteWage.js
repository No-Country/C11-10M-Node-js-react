const {wage} = require("../../db")


const deleteWage = async(req,res)=>{
    try{
        const {id} = req.params
        await wage.destroy({
            where:{id}
        });

        res.status(200).json({sucess:true})
    }
    catch(err){
        res.status(400).json({ mensage: err.mensage });
    }
}

module.exports = deleteWage