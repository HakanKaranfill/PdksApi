const sqlMain = require('../controller/mainController');
const shiftAndPermissionModel = require('../models/shiftAndPermissionModel');

exports.getShiftAndPermissionList = async(req,res) => {
    try {
        let reqs = req
        let shiftAndPermissionData = await sqlMain.getShiftAndPermissionList(2402)        
        res.send(shiftAndPermissionData)
    } catch (err) {
        return err
    }
    
}
