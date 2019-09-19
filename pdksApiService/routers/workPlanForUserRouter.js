
const workPlanForUserController = require('../controller/workPlanForUserController');

const workPlanForUserRoute = [
    {
    method: 'GET',
    url: '/api/WorkPlanForUser',
    handler: workPlanForUserController.getWorkPlanForUserData,
    schema: {
        description: 'Gruplara Bağlı Çalışma Planını Listeler.',
        tags: ['WorkPlanForUser'],
        summary: 'Gruplara Bağlı Çalışma Planını Listeler.'
    }
} 
// ,
// {
//     method: 'POST',
//     url: '/api/workGroupPlan',
//     handler: staffController.saveStaff,
//     schema: {
//         description: 'Yeni Personel Ekler.',
//         tags: ['Staff'],
//         summary: 'Yeni Personel Ekler.'
//     }
// }
]

module.exports = workPlanForUserRoute