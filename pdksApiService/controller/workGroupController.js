const sqlMain = require('./mainController');
const workGroupModel = require('../models/workGroupModel');

exports.getWorkGroupData = async(req,res) => {
    try {
        let reqs = req
        let workGroupData = await sqlMain.getWorkGroupList(2402)        
        res.send(workGroupData)
    } catch (err) {
        return err
    }
}

exports.saveWorkGroup = async(req,res) => {
    try {
        let myModel = new workGroupModel.workGroupModel()
        myModel.GRUP_ADI = "GÜNDÜZ 13-21"
        let result = await sqlMain.saveWorkGroup(2402,myModel)
        res.send("OK")
    } catch (err) {
        
    }
}
