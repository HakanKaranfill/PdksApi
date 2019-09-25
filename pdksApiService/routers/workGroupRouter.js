const groupController = require('../controller/groupController');
const groupRoute = [
    {
    method: 'GET',
    url: '/api/group',
    handler: groupController.getGroupList,
    schema: {
        description: 'Vardiya Listesini Getirir.',
        tags: ['group'],
        summary: 'Vardiya Listesini Getirir.'
    }
} 
,
{
    method: 'PUT',
    url: '/api/group',
    handler: groupController.putGroup,
    schema: {
        description: 'Yeni Vardiya Ekler.',
        tags: ['group'],
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
        tags: ['group'],
        summary: 'Seçilen Vardiyayı Siler.'
    }
}
]

module.exports = groupRoute