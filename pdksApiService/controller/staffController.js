const sqlMain = require('../controller/mainController');
const staffModel = require('../models/staffModel');

exports.getStaffList = async(req,res) => {
    try {
     
        let companyCode = req.body.companyCode
        let licanceId = req.body.licanceId
        let status = req.body.status
        let staffData = await  sqlMain.getStaffList(licanceId,companyCode,status)
        res.send(staffData)
    } catch (err) {
        return err
    }
}






exports.updateStaff = async(req,res) => {
    try {
        let staffModel = req.body.staffModel
        let licanceId = req.body.licanceId
        let result = await  sqlMain.updateStaff(licanceId,staffModel)
        res.send("OK")
    } catch (err) {
        
    }
}



