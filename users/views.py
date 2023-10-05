from django.shortcuts import render
from rest_framework import routers, serializers, viewsets
from django.contrib.auth.models import User

# Create your views here.


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['url', 'username', 'email', 'is_staff']


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
