const sqlMain = require('./mainController');
const workPlanForGroupModel = require('../models/workPlanForGroupModel');

exports.getworkPlanForGroupData = async(req,res) => {
    try {
        let reqs = req
        let workPlanForGroupData = await sqlMain.getWorkPlanForGroupList(2402)        
        res.send(workPlanForGroupData)
    } catch (err) {
        return err
    }
}