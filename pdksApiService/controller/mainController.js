const socketClient = require('../tools/socketClient');
const socketEvent = require('../tools/socketEvent');
// const staffModel = require('../models/staffModel');
// const shiftModel = require('../models/shiftModel');
const returnModel = require('../models/responseModel');

//----------------------------------------------------------------------
let response = new returnModel.responseModel()
exports.getStaffList = async(licanceId) => {
    try {
        let staffData = await socketClient.getData("SELECT Kimlik, (SELECT SUBE_KODU+' - '+SUBE_ADI FROM TBL_SUBE WHERE TBL_SUBE.SUBE_KODU = TBL_PER.SUBE_KODU) AS SUBE_KODU, PERSONEL_KODU, PERSONEL_ADI, AKTIF, ISE_GIRIS, ISTEN_AYRILIS, UNVAN, (SELECT GRUP_ADI FROM TBL_PER_GRUP WHERE kimlik = GRUP_ID) AS GRUP_ADI FROM TBL_PER",licanceId,"TBL_PER")
        return staffData
    } catch (error) {
        return error
    }

}

//----------------------------------------------------------------------

exports.getPermissionList = async(licanceId) => {
    try {
        let permissionData = await socketClient.getData("SELECT kimlik, ADI ,UCRET FROM TBL_PER_VARDIYA_IZIN WHERE A_ZAMAN IS NULL",licanceId,"IZIN")
        return permissionData
    } catch (error) {
        return error
    }

}
exports.deletePermission = async(licanceId,model) => {
    try {
        let permissionData = await socketEvent.Event("DELETE FROM TBL_PER_VARDIYA_IZIN WHERE kimlik='"+model.kimlik+"'",licanceId,"IZINDelete")
        response.message="Ok"
        response.status="True"
        response.data=""       
        return response
    } catch (error) {
        return error
    }

}

exports.savePermissions = async(licanceId,model) => {   
    try {
        if (model.kimlik==undefined) {
            
            Cmd =  "INSERT INTO TBL_PER_VARDIYA_IZIN (ADI,UCRET) VALUES" + "('" + model.permissionName +"'" + ",'" + model.type +"')" 
        }
        else{
            Cmd =  "UPDATE TBL_PER_VARDIYA_IZIN SET ADI = '"+ model.ADI +"' , UCRET = '"+ model.UCRET +"'  WHERE kimlik = "+ model.kimlik 
        }  
        let insertResult = await socketEvent.Event(Cmd,licanceId,"permission")
        response.message="Ok"
        response.status="True"
        response.data=""       
        return response
    } catch (error) {
        return error
    }
}

//---------------------------------------------------------------------- SHIFT

exports.getShiftList = async(licanceId) => {
    try {
        let shiftData = await socketClient.getData("SELECT kimlik, ADI, A_ZAMAN, K_ZAMAN FROM TBL_PER_VARDIYA_IZIN WHERE A_ZAMAN IS NOT NULL",licanceId,"VARDIYA")
        return shiftData
    } catch (error) {
        return error
    }

}

exports.deleteShift = async(licanceId,model) => {
    try {
        let ShifData = await socketEvent.Event("DELETE FROM TBL_PER_VARDIYA_IZIN WHERE kimlik='"+model.kimlik+"'",licanceId,"VARDIYA_DELETE")
        response.message="Ok"
        response.status="True"
        response.data=""       
        return response
    } catch (error) {
        return error
    }

}

exports.putShift = async(licanceId,model) => {   
    try {
        if (model.kimlik==undefined) {
            
            Cmd =  "INSERT INTO TBL_PER_VARDIYA_IZIN (ADI,A_ZAMAN,K_ZAMAN) VALUES" + "('" + model.shiftName +"'" + ",'" + model.startTime +"'" + ",'" + model.stopTime+"' )" 
        }
        else{
            Cmd =  "UPDATE TBL_PER_VARDIYA_IZIN SET ADI = '"+ model.ADI +"' , A_ZAMAN = '"+ model.A_ZAMAN +"' , K_ZAMAN = '"+ model.K_ZAMAN +"'  WHERE kimlik = "+ model.kimlik 
        }  
        let insertResult = await socketEvent.Event(Cmd,licanceId,"permission")
        response.message="Ok"
        response.status="True"
        response.data=""       
        return response
    } catch (error) {
        return error
    }
}

//---------------------------------------------------------------------- SHIFT

exports.getGroupList = async(licanceId) => {
    try {
        let groupData = await socketClient.getData("SELECT kimlik,GRUP_ADI FROM TBL_PER_GRUP",licanceId,"GRUP_LISTE")
        return groupData
    } catch (error) {
        return error
    }

}

exports.deleteGroup = async(licanceId,model) => {
    try {
        let groupData = await socketEvent.Event("DELETE FROM TBL_PER_GRUP WHERE kimlik ='"+model.kimlik+"'",licanceId,"GRUP_LISTE_DELETE")
        response.message="Ok"
        response.status="True"
        response.data=""       
        return response
    } catch (error) {
        return error
    }

}

exports.putGroup = async(licanceId,model) => {   
    try {
        if (model.kimlik==undefined) {
            
            Cmd =  "INSERT INTO TBL_PER_GRUP (GRUP_ADI) VALUES('" + model.groupName +"')"
        }
        else{
            Cmd =  "UPDATE TBL_PER_GRUP SET GRUP_ADI = '"+ model.GRUP_ADI +"'  WHERE kimlik = "+ model.kimlik 
        }  
        let insertResult = await socketEvent.Event(Cmd,licanceId,"group")
        response.message="Ok"
        response.status="True"
        response.data=""       
        return response
    } catch (error) {
        return error
    }
}

//----------------------------------------------------------------------

exports.getWorkPlanForGroupList = async(licanceId,kimlik) => {
    try {
        let WorkPlanForGroupData = await socketClient.getData("SELECT kimlik, convert(date,TARIH)as TARIH, FORMAT(TARIH, 'dddd', 'tr-TR')  as GUN_ADI, (SELECT ADI FROM TBL_PER_VARDIYA_IZIN where kimlik=VARDIYA_IZIN_ID) AS PLAN_TIPI FROM TBL_PER_GRUP_CALISMA_PLANI WHERE ISLEM_ID = '"+kimlik+"'",licanceId,"GRUP_CALISMA_PLANI")
        return WorkPlanForGroupData
    } catch (error) {
        return error
    }

}


exports.getWorkPlanForUserList = async(licanceId) => {
    try {
        let WorkPlanForUserData = await socketClient.getData("SELECT kimlik, TARIH, GUN_ADI, (SELECT ADI FROM TBL_PER_VARDIYA_IZIN where kimlik=VARDIYA_IZIN_ID) AS PLAN_TIPI FROM TBL_PER_CALISMA_PLANI WHERE ISLEM_ID = 1",licanceId,"GRUP_CALISMA_PLANI")
        return WorkPlanForUserData
    } catch (error) {
        return error
    }

}



