const sqlMain = require('./mainController')
const WorkPlanForUserModel = require('../models/workPlanForUserModel')

exports.getWorkPlanForUserData = async(req,res) => {
    try {
        let reqs = req
        let WorkPlanForUserData = await sqlMain.getWorkPlanForUserList(2402,req.params.kimlik)        
        res.send(WorkPlanForUserData)
    } catch (err) {
        return err
    }

}

    exports.putWorkPlanForUser=async(req,res) =>{
        try {
            let workPlanForUserFrom = req.body
            // workPlanForUserFrom.grupID = req.body.selectData
            let licanceId = req.body.licanceId
            let WorkPlanForUserData = await sqlMain.putWorkPlanForUser(licanceId,workPlanForUserFrom)        
            res.send(WorkPlanForUserData)
        } catch (err) {
            return err
        }
    }
    
    
    exports.deleteWorkPlanForUser=async(req,res) =>{
        try {
            console.log(req.body)
            let workPlanForUser = req.body.workPlanForUserModel
            let licanceId = req.body.licanceId
            let shiftData = await sqlMain.deleteworkPlanForUser(licanceId,workPlanForUser)        
            res.send(shiftData)
        } catch (err) {
            return err
        }    
}
