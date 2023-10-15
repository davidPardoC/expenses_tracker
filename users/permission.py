from pickle import TRUE
from rest_framework.permissions import BasePermission
from users.models import User
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework.request import Request

JWT_authenticator = JWTAuthentication()


class IsStandarUser(BasePermission):
    def has_permission(self, request:Request, view):
        try:
            user = JWT_authenticator.authenticate(request=request)
            if user == None:
                return False
        except User.DoesNotExist:
            return False
        return True
