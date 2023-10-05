from rest_framework import serializers
from rest_framework.validators import UniqueValidator
from .models import Category


class CategoryModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'


class CategorySerializer(serializers.Serializer):
    name = serializers.CharField(min_length=2, max_length=100, validators=[
                                 UniqueValidator(queryset=Category.objects.all())])

    def create(self, validated_data):
        category = Category.objects.create(**validated_data)
        return category
