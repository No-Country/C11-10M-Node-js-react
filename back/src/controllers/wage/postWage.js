const { wage } = require("../../db");

const createWage = async (req, res) => {
    try{
        const { nincome,nhours,ehours,deductions,plus,payment } = req.body;
        await wage.create({
            nincome,
            nhours,
            ehours,
            deductions,
            plus,
            payment
        })
        res.status(200).json({ success: true });
    }
    catch(err){
        res.status(400).json({ message: err.message });
    }
}

module.exports = createWage;