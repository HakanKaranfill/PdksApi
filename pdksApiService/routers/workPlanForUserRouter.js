
const workPlanForUserController = require('../controller/workPlanForUserController');

const workPlanForUserRoute = [
    // {
    //     method: 'GET',
    //     url: '/api/workPlanForUser',
    //     handler: workPlanForUserController.getWorkPlanForUserData,
    //     schema: {
    //         description: 'Vardiya Listesini Getirir.',
    //         tags: ['workPlanForUser'],
    //         summary: 'Vardiya Listesini Getirir.'
    //     }
    // } 
    // ,
        {
        method: 'GET',
        url: '/api/workPlanForUser/:kimlik',
        handler: workPlanForUserController.getWorkPlanForUserData,
        schema: {
            description: 'Vardiya Listesini Getirir.',
            tags: ['workPlanForUser'],
            summary: 'Vardiya Listesini Getirir.'
        }
    } 
    ,
    
    
    {
        method: 'PUT',
        url: '/api/workPlanForUser',
        handler: workPlanForUserController.putWorkPlanForUser,
        schema: {
            description: 'Yeni Vardiya Ekler.',
            tags: ['workPlanForUser'],
            summary: 'Yeni Vardiya Ekler.'
        }
    }
    ,
    {
        method: 'DELETE',
        url: '/api/workPlanForUser',
        handler: workPlanForUserController.deleteWorkPlanForUser,
        schema: {
            description: 'Seçilen Vardiyayı Siler.',
            tags: ['workPlanForUser'],
            summary: 'Seçilen Vardiyayı Siler.'
        }
    }
]

module.exports = workPlanForUserRoute