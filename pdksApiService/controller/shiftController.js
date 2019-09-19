const sqlMain = require('../controller/mainController');
const shiftModel = require('../models/shiftModel');

exports.getShiftList = async(req,res) => {
    try {
        let reqs = req
        let shiftData = await sqlMain.getShiftList(2402)        
        res.send(shiftData)
    } catch (err) {
        return err
    }
}






exports.saveStaff = async(req,res) => {
    try {
        let myModel = new staffModel.StaffModel()
        myModel.ARAC = "TEST"
        let result = await sqlMain.saveStaff(2892,myModel)
        res.send("OK")
    } catch (err) {
        
    }
}



