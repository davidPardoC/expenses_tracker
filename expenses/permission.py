from rest_framework.permissions import BasePermission
from users.models import User


class IsStandarUser(BasePermission):

    def has_permission(self, request, view):
        try:
            user = User.objects.get(email=request.user)
        except User.DoesNotExist:
            return False
        return True
