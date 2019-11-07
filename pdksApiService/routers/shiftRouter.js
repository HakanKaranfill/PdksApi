const shiftController = require('../controller/shiftController');
const shiftRoute = [
//     {
//     method: 'GET',
//     url: '/api/shift',
//     handler: shiftController.getShiftData,
//     schema: {
//         description: 'Vardiya Listesini Getirir.',
//         tags: ['Shift'],
//         summary: 'Vardiya Listesini Getirir.'
//     }
// } 
// ,
{
    method: 'POST',
    url: '/api/shift',
    handler: shiftController.getShiftData,
    //  workPlanForGroupController.putWorkPlanForGroup,
    schema: {
        description: 'Vardiya Listesini Getirir.',
        tags: ['shift'],
        summary: 'Vardiya Listesini Getirir.',
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
,
{
    method: 'PUT',
    url: '/api/shift',
    handler: shiftController.putShift,
    schema: {
        description: 'Yeni Vardiya Ekler.',
        tags: ['Shift'],
        summary: 'Yeni Vardiya Ekler.'
    }
}
,
{
    method: 'DELETE',
    url: '/api/shift',
    handler: shiftController.deleteShift,
    schema: {
        description: 'Seçilen Vardiyayı Siler.',
        tags: ['Shift'],
        summary: 'Seçilen Vardiyayı Siler.'
    }
}
]

module.exports = shiftRoute