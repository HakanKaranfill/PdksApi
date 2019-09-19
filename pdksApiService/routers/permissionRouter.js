
const permissionController = require('../controller/permissionController');

const permissionRoute = [
    {
    method: 'GET',
    url: '/api/permission',
    handler: permissionController.getPermissionData,
    schema: {
        description: 'Tatil / izin Listesini Getirir.',
        tags: ['Permission'],
        summary: 'Tatil / izin Getirir.'
    }
} 
,
{
    method: 'PUT',
    url: '/api/permission',
    handler: permissionController.savePermission,
    schema: {
        description: 'Yeni İzin Ekler.',
        tags: ['Permission'],
        summary: 'Yeni İzin Ekler.'
    }
}
,
{
    method: 'DELETE',
    url: '/api/permission',
    handler: permissionController.deletePermission,
    schema: {
        description: 'Seçilen İzni Siler.',
        tags: ['Permission'],
        summary: 'Seçilen İzni Siler.'
    }
}
]

module.exports = permissionRoute