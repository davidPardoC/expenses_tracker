from rest_framework import viewsets, status, mixins
from rest_framework import generics
from rest_framework.decorators import action
from users.models import User
from rest_framework.response import Response
from users.serializers import UserModelSerializer, UserSignupSerializer


class UserViewSet(mixins.RetrieveModelMixin, mixins.UpdateModelMixin, mixins.ListModelMixin, viewsets.GenericViewSet):

    queryset = User.objects.filter(is_active=True)
    serializer_class = UserModelSerializer

    @action(detail=False, methods=['post'])
    def signup(self, request):
        """User sign up"""
        serializer = UserSignupSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        data = UserModelSerializer(user).data
        return Response(data, status=status.HTTP_201_CREATED)

    def update(self, request, *args, **kwargs):
        return super().update(request, *args, **kwargs)
