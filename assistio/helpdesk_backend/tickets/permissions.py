from rest_framework.permissions import BasePermission

class IsAdminOrSupervisor(BasePermission):
    def has_permission(self, request, view):
        return (
            request.user and request.user.is_authenticated and (
                request.user.is_staff or
                request.user.groups.filter(name='Supervisor').exists()
            )
        )
