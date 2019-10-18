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
        let licanceNo = req.body.licanceNo

        let groupData = await sqlMain.putMontlySchedule(licanceNo,montlyModel)        
        res.send(groupData)
    } catch (err) {
        return err
    }
}
// exports.deleteGroup=async(req,res) =>{
//     try {
//         console.log(req.body)
//         let groupModel = req.body.groupModel
//         let licanceNo = req.body.licanceNo
//         let groupData = await sqlMain.deleteGroup(licanceNo,groupModel)        
//         res.send(groupData)
//     } catch (err) {
//         return err
//     }
// }