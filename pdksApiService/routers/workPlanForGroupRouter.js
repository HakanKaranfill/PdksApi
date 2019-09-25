
const workPlanForGroupController = require('../controller/workPlanForGroupController');
const workPlanForGroupRoute = [
    {
    method: 'GET',
    url: '/api/workPlanForGroup',
    handler: workPlanForGroupController.getworkPlanForGroupData,
    schema: {
        description: 'Vardiya Listesini Getirir.',
        tags: ['workPlanForGroup'],
        summary: 'Vardiya Listesini Getirir.'
    }
} 
,
    {
    method: 'GET',
    url: '/api/workPlanForGroup/:kimlik',
    handler: workPlanForGroupController.getworkPlanForGroupData,
    schema: {
        description: 'Vardiya Listesini Getirir.',
        tags: ['workPlanForGroup'],
        summary: 'Vardiya Listesini Getirir.'
    }
} 
,


{
    method: 'PUT',
    url: '/api/workPlanForGroup',
    handler: workPlanForGroupController.getworkPlanForGroupData,
    schema: {
        description: 'Yeni Vardiya Ekler.',
        tags: ['workPlanForGroup'],
        summary: 'Yeni Vardiya Ekler.'
    }
}
// ,
// {
//     method: 'DELETE',
//     url: '/api/workPlanForGroup',
//     handler: workPlanForGroupController.,
//     schema: {
//         description: 'Seçilen Vardiyayı Siler.',
//         tags: ['workPlanForGroup'],
//         summary: 'Seçilen Vardiyayı Siler.'
//     }
// }
]

module.exports = workPlanForGroupRoute