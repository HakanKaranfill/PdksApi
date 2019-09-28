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
        let licanceNo = req.body.licanceNo

        let WorkPlanForGroupData = await sqlMain.putWorkPlanForGroup(licanceNo,workPlanForGroupFrom)        
        res.send(WorkPlanForGroupData)
    } catch (err) {
        return err
    }
}