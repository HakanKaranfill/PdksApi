const sqlMain = require('../controller/mainController');
const permissionModel = require('../models/permissionModel');

exports.getPermissionData = async(req,res) => {
    try {
        // let reqs = req
        // let permissionData = await sqlMain.getPermissionList(2402)        
        // res.send(permissionData)

        let companyCode = req.body.companyCode
        let licanceId = req.body.licanceId
        let permissionData = await  sqlMain.getPermissionList(licanceId,companyCode)
        res.send(permissionData)
    } catch (err) {
        return err
    }
    
}

exports.getPermissionControl = async(req,res) => {
    try {
        let reqs = req
        let permissionControl = await sqlMain.getPermissionControl(2402,req.params.kimlik)        
        res.send(permissionControl)
    } catch (err) {
        return err
    }
    
}

exports.savePermission=async(req,res) =>{
    try {
    let perModel = req.body.permissionModel
    let companyCode = req.body.companyCode
    let licanceId = req.body.licanceId
        let permissionData = await sqlMain.savePermissions(licanceId,perModel,companyCode)        
        res.send(permissionData)
    } catch (err) {
        return err
    }
}
exports.deletePermission=async(req,res) =>{
    try {
        console.log(req.body)
        let perModel = req.body.permissionModel
        let licanceId = req.body.licanceId
        let permissionData = await sqlMain.deletePermission(licanceId,perModel)        
        res.send(permissionData)
    } catch (err) {
        return err
    }
}