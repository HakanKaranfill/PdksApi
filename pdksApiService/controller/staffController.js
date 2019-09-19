const sqlMain = require('../controller/mainController');
const staffModel = require('../models/staffModel');

exports.getStaffList = async(req,res) => {
    try {
        let reqs = req
        let staffData = await sqlMain.getStaffList(2402)        
        res.send(staffData)
    } catch (err) {
        return err
    }
}






exports.updateStaff = async(req,res) => {
    try {
        let staffModel = req.body.staffModel
        let licanceNo = req.body.licanceNo
        let result = await  sqlMain.updateStaff(licanceNo,staffModel)
        res.send("OK")
    } catch (err) {
        
    }
}



