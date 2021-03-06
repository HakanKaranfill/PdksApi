const groupController = require('../controller/groupController');
const groupRoute = [
//     {
//     method: 'GET',
//     url: '/api/group',
//     handler: groupController.getGroupList,
//     schema: {
//         description: 'Vardiya Listesini Getirir.',
//         tags: ['Group'],
//         summary: 'Vardiya Listesini Getirir.'
//     }
// } 
{
    method: 'POST',
    url: '/api/group',
    handler: groupController.getGroupList,
    //  workPlanForGroupController.putWorkPlanForGroup,
    schema: {
        description: 'Grup Listesini Getirir.',
        tags: ['group'],
        summary: 'Grup Listesini Getirir.',
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
    method: 'GET',
    url: '/api/group/:kimlik',
    handler: groupController.getGroupControl,
    schema: {
        description: 'Tatil / izin Listesini Getirir.',
        tags: ['Group'],
        summary: 'Tatil / izin Getirir.'
    }
} 
,
{
    method: 'PUT',
    url: '/api/group',
    handler: groupController.putGroup,
    schema: {
        description: 'Yeni Vardiya Ekler.',
        tags: ['Group'],
        summary: 'Yeni Vardiya Ekler.'
    }
}
,
{
    method: 'DELETE',
    url: '/api/group',
    handler: groupController.deleteGroup,
    schema: {
        description: 'Seçilen Vardiyayı Siler.',
        tags: ['Group'],
        summary: 'Seçilen Vardiyayı Siler.'
    }
}
]

module.exports = groupRoute