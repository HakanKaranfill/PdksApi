const sqlMain = require('./mainController');
const workPlanForGroupModel = require('../models/workPlanForGroupModel');

exports.getworkPlanForGroupData = async(req,res) => {
    try {
        
        let reqs = req
        let workPlanForGroupData = await sqlMain.getWorkPlanForGroupList(2402,req.params.kimlik)        
        res.send(workPlanForGroupData)
    } catch (err) {
        return err
    }
}



exports.putWorkPlanForGroup=async(req,res) =>{
    try {
        let workPlanForGroupFrom = req.body
        // workPlanForGroupFrom.grupID = req.body.selectData
        let licanceId = req.body.licanceId

        let workPlanForGroupModel = await sqlMain.putWorkPlanForGroup(licanceId,workPlanForGroupFrom)        
        res.send(workPlanForGroupModel)
    } catch (err) {
        return err
    }
}


exports.deleteWorkPlanForGroup=async(req,res) =>{
    try {
        console.log(req.body)
        let workPlanForGroup = req.body.workPlanForGroupModel
        let licanceId = req.body.licanceId
        let shiftData = await sqlMain.deleteworkPlanForGroup(licanceId,workPlanForGroup)        
        res.send(shiftData)
    } catch (err) {
        return err
    }
}
