
const montlyScheduleController = require('../controller/montlyScheduleController');
const workPlanForGroupRoute = [
//     {
//     method: 'GET',
//     url: '/api/workPlanForGroup',
//     handler: workPlanForGroupController.getworkPlanForGroupData,
//     schema: {
//         description: 'Vardiya Listesini Getirir.',
//         tags: ['workPlanForGroup'],
//         summary: 'Vardiya Listesini Getirir.'
//     }
// } 
// ,
//     {
//     method: 'GET',
//     url: '/api/workPlanForGroup/:kimlik',
//     handler: workPlanForGroupController.getworkPlanForGroupData,
//     schema: {
//         description: 'Vardiya Listesini Getirir.',
//         tags: ['workPlanForGroup'],
//         summary: 'Vardiya Listesini Getirir.'
//     }
// } 
// ,


{
    method: 'GET',
    url: '/api/montlySchedule',
    handler: montlyScheduleController.putMontlySchedule,
    //  workPlanForGroupController.putWorkPlanForGroup,
    schema: {
        description: 'İki Tarih Arasındaki Çalışma Çizelgesini Listeler',
        tags: ['montlySchedule'],
        summary: 'İki Tarih Arasındaki Çalışma Çizelgesini Listeler'
    }
}
,
{
    method: 'POST',
    url: '/api/montlySchedule',
    handler: montlyScheduleController.putMontlySchedule,
    //  workPlanForGroupController.putWorkPlanForGroup,
    schema: {
        description: 'İki Tarih Arasındaki Çalışma Çizelgesini Listeler',
        tags: ['montlySchedule'],
        summary: 'İki Tarih Arasındaki Çalışma Çizelgesini Listeler'
    }
}
// ,
// {
//     method: 'DELETE',
//     url: '/api/workPlanForGroup',
//     handler: workPlanForGroupController.deleteWorkPlanForGroup,
//     schema: {
//         description: 'Seçilen Vardiyayı Siler.',
//         tags: ['workPlanForGroup'],
//         summary: 'Seçilen Vardiyayı Siler.'
//     }
// }
]

module.exports = workPlanForGroupRoute