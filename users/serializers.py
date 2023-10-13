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


class UserLoginSerializer(serializers.Serializer):

    # Required fields
    email = serializers.EmailField()
    password = serializers.CharField(min_length=8, max_length=64)

    def validate(self, data):
        user = authenticate(username=data['email'], password=data['password'])
        if not user:
            raise serializers.ValidationError('Invalid credentials')

        self.context['user'] = user
        return data

    def create(self, validated_data):
        token, created = Token.objects.get_or_create(user=self.context['user'])
        return self.context['user'], token.key


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
