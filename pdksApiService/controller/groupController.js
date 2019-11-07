const sqlMain = require('./mainController');
const groupModel = require('../models/workGroupModel');

exports.getGroupList = async(req,res) => {
    try {
        // let reqs = req
        // let groupData = await sqlMain.getGroupList(2402)        
        // res.send(groupData)

        let companyCode = req.body.companyCode
        let licanceId = req.body.licanceId
        let groupData = await  sqlMain.getGroupList(licanceId,companyCode)
        res.send(groupData)
    } catch (err) {
        return err
    }
    
}

exports.getGroupControl = async(req,res) => {
    try {
        let reqs = req
        let groupControl = await sqlMain.getGroupControl(2402,req.params.kimlik)        
        res.send(groupControl)
    } catch (err) {
        return err
    }
    
}
exports.putGroup=async(req,res) =>{
    try {
        let companyCode = req.body.companyCode
        let licanceId = req.body.licanceId
        let groupModel = req.body.groupModel
        let groupData = await sqlMain.putGroup(licanceId,groupModel,companyCode)        
        res.send(groupData)
    } catch (err) {
        return err
    }
}
exports.deleteGroup=async(req,res) =>{
    try {
        console.log(req.body)
        let groupModel = req.body.groupModel
        let licanceId = req.body.licanceId
        let groupData = await sqlMain.deleteGroup(licanceId,groupModel)        
        res.send(groupData)
    } catch (err) {
        return err
    }
}