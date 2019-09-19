const sqlMain = require('../controller/mainController');
const permissionModel = require('../models/permissionModel');

exports.getPermissionData = async(req,res) => {
    try {
        let reqs = req
        let permissionData = await sqlMain.getPermissionList(2402)        
        res.send(permissionData)
    } catch (err) {
        return err
    }
    
}
exports.savePermission=async(req,res) =>{
    try {
        console.log(req.body)
        let perModel = req.body.permissionModel
        let licanceNo = req.body.licanceNo
        let permissionData = await sqlMain.savePermissions(licanceNo,perModel)        
        res.send(permissionData)
    } catch (err) {
        return err
    }
}
exports.deletePermission=async(req,res) =>{
    try {
        console.log(req.body)
        let perModel = req.body.permissionModel
        let licanceNo = req.body.licanceNo
        let permissionData = await sqlMain.deletePermission(licanceNo,perModel)        
        res.send(permissionData)
    } catch (err) {
        return err
    }
}