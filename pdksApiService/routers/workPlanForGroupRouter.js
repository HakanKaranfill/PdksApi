
const workPlanForGroupController = require('../controller/workPlanForGroupController');

const workPlanForGroupRoute = [
    {
    method: 'GET',
    url: '/api/workPlanForGroup',
    handler: workPlanForGroupController.getworkPlanForGroupData,
    schema: {
        description: 'Gruplara Bağlı Çalışma Planını Listeler.',
        tags: ['workPlanForGroup'],
        summary: 'Gruplara Bağlı Çalışma Planını Listeler.'
    }
} 
// ,
// {
//     method: 'POST',
//     url: '/api/workPlanForGroup',
//     handler: staffController.saveStaff,
//     schema: {
//         description: 'Yeni Personel Ekler.',
//         tags: ['Staff'],
//         summary: 'Yeni Personel Ekler.'
//     }
// }
]

module.exports = workPlanForGroupRoute