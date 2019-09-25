const sqlMain = require('../controller/mainController');
const shiftModel = require('../models/shiftModel');

exports.getShiftData = async(req,res) => {
    try {
        let reqs = req
        let shiftData = await sqlMain.getShiftList(2402)        
        res.send(shiftData)
    } catch (err) {
        return err
    }
    
}
exports.putShift=async(req,res) =>{
    try {
        console.log(req.body)
        let shiftModel = req.body.shiftModel
        let licanceNo = req.body.licanceNo

        let shiftData = await sqlMain.putShift(licanceNo,shiftModel)        
        res.send(shiftData)
    } catch (err) {
        return err
    }
}
exports.deleteShift=async(req,res) =>{
    try {
        console.log(req.body)
        let shiftModel = req.body.shiftModel
        let licanceNo = req.body.licanceNo
        let shiftData = await sqlMain.deleteShift(licanceNo,shiftModel)        
        res.send(shiftData)
    } catch (err) {
        return err
    }
}