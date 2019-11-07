const sqlMain = require('../controller/mainController');
const shiftModel = require('../models/shiftModel');

exports.getShiftData = async(req,res) => {
    try {

        // let reqs = req
        // let shiftData = await sqlMain.getShiftList(2402)        
        // res.send(shiftData)
        let companyCode = req.body.companyCode
        let licanceId = req.body.licanceId
        let shiftData = await  sqlMain.getShiftList(licanceId,companyCode)
        res.send(shiftData)
    } catch (err) {
        return err
    }
    
}
exports.putShift=async(req,res) =>{
    try {
        console.log(req.body)
        let shiftModel = req.body.shiftModel
        let companyCode = req.body.companyCode
        let licanceId = req.body.licanceId
        let shiftData = await sqlMain.putShift(licanceId,shiftModel,companyCode)        
        res.send(shiftData)
    } catch (err) {
        return err
    }
}
exports.deleteShift=async(req,res) =>{
    try {
        console.log(req.body)
        let shiftModel = req.body.shiftModel
        let licanceId = req.body.licanceId
        let shiftData = await sqlMain.deleteShift(licanceId,shiftModel)        
        res.send(shiftData)
    } catch (err) {
        return err
    }
}