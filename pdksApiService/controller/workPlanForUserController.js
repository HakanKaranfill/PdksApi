const sqlMain = require('./mainController')
const WorkPlanForUserModel = require('../models/workPlanForUserModel')

exports.getWorkPlanForUserData = async(req,res) => {
    try {
        let reqs = req
        let WorkPlanForUserData = await sqlMain.getWorkPlanForUserList(2402)        
        res.send(WorkPlanForUserData)
    } catch (err) {
        return err
    }
}