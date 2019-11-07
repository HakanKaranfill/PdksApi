const sqlMain = require('./mainController');
const montlyModel = require('../models/montlyScheduleModel');

// exports.getGroupList = async(req,res) => {
//     try {
//         let reqs = req
//         let groupData = await sqlMain.getGroupList(2402)        
//         res.send(groupData)
//     } catch (err) {
//         return err
//     }
    
// }
exports.putMontlySchedule =async(req,res) =>{
    try {
        console.log(req.body)
        let montlyModel = req.body
        let companyCode = req.body.companyCode
        let licanceId = req.body.licanceId
        let groupData = await sqlMain.putMontlySchedule(licanceId,montlyModel,companyCode)        
        res.send(groupData)
    } catch (err) {
        return err
    }
}
// exports.deleteGroup=async(req,res) =>{
//     try {
//         console.log(req.body)
//         let groupModel = req.body.groupModel
//         let licanceId = req.body.licanceId
//         let groupData = await sqlMain.deleteGroup(licanceId,groupModel)        
//         res.send(groupData)
//     } catch (err) {
//         return err
//     }
// }