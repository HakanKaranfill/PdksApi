
const shiftAndPermissionContoller = require('../controller/shiftAndPermissionContoller');

const shiftAndPermissionRoute = [
//     {
//     method: 'GET',
//     url: '/api/shiftAndPermission',
//     handler: shiftAndPermissionContoller.getShiftAndPermissionList,
//     schema: {
//         description: 'Tatil / izin / Vardiya Listesini Getirir.',
//         tags: ['shiftAndPermission'],
//         summary: 'Tatil / izin / Vardiya Listesini Getirir.'
//     }
// } 
{
    method: 'POST',
    url: '/api/shiftAndPermission',
    handler: shiftAndPermissionContoller.getShiftAndPermissionList,
    //  workPlanForGroupController.putWorkPlanForGroup,
    schema: {
        description: 'Tatil / izin / Vardiya Listesini Getirir.',
        tags: ['shiftAndPermission'],
        summary: 'Tatil / izin / Vardiya Listesini Getirir.',
        body: {
            type: 'object',
            properties: {
                companyCode: {
                    type: 'number'
                },
                licanceId: {
                    type: 'number'
                }
            }
        }
    }
}
]

module.exports = shiftAndPermissionRoute