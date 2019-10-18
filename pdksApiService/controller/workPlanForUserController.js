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
            let licanceNo = req.body.licanceNo
            let WorkPlanForUserData = await sqlMain.putWorkPlanForUser(licanceNo,workPlanForUserFrom)        
            res.send(WorkPlanForUserData)
        } catch (err) {
            return err
        }
    }
    
    
    exports.deleteWorkPlanForUser=async(req,res) =>{
        try {
            console.log(req.body)
            let workPlanForUser = req.body.workPlanForUserModel
            let licanceNo = req.body.licanceNo
            let shiftData = await sqlMain.deleteworkPlanForUser(licanceNo,workPlanForUser)        
            res.send(shiftData)
        } catch (err) {
            return err
        }    
}
