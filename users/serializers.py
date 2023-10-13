from rest_framework import serializers
from django.contrib.auth import password_validation, authenticate
from rest_framework.authtoken.models import Token
from users.models import User
from rest_framework.validators import UniqueValidator
from django.contrib.auth.hashers import make_password


class UserModelSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ('first_name', 'last_name', 'email', 'monthly_budget')


class UserSignupSerializer(serializers.Serializer):
    email = serializers.EmailField(
        validators=[UniqueValidator(queryset=User.objects.all())])

    first_name = serializers.CharField(
        min_length=2, max_length=50, required=False)

    last_name = serializers.CharField(
        min_length=2, max_length=100, required=False)

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        user.set_password(validated_data['password'])
        user.save()
        return user
