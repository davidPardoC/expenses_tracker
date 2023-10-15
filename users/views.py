from rest_framework import viewsets, status, mixins
from rest_framework import generics
from rest_framework.decorators import action, permission_classes as permission_classes_decorator
from users.models import User
from rest_framework.response import Response
from users.serializers import UserModelSerializer, UserSignupSerializer
from .permission import IsStandarUser
from rest_framework import permissions


class UserViewSet(mixins.RetrieveModelMixin, mixins.UpdateModelMixin, mixins.ListModelMixin, viewsets.GenericViewSet):

    queryset = User.objects.filter(is_active=True)
    serializer_class = UserModelSerializer
    permission_classes = [IsStandarUser]

    @action(detail=False, methods=['post'], permission_classes=[permissions.AllowAny])
    def signup(self, request):
        """User sign up"""
        serializer = UserSignupSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        data = UserModelSerializer(user).data
        return Response(data, status=status.HTTP_201_CREATED)

    def update(self, request, *args, **kwargs):
        return super().update(request, *args, **kwargs)
