from rest_framework import serializers
from rest_framework.validators import UniqueValidator
from .models import Category, Expense


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


class ExpenseModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Expense
        fields = '__all__'


class CreateExpenseSerializer(serializers.Serializer):
    amount = serializers.FloatField(min_value=0.0)
    name = serializers.CharField(min_length=2, max_length=100)
    category = serializers.IntegerField()

    def validate(self, attrs):
        category = Category.objects.get(pk=attrs['category'])
        attrs['category'] = category
        return attrs

    def create(self, validated_data):
        expense = Expense.objects.create(**validated_data)
        return expense


class UpdateExpenseSerializer(serializers.Serializer):
    amount = serializers.FloatField(min_value=0.0)
    name = serializers.CharField(min_length=2, max_length=100)
    category = serializers.IntegerField()

    def validate(self, attrs):
        category = Category.objects.get(pk=attrs['category'])
        attrs['category'] = category
        return attrs

    def create(self, validated_data):
        expense = Expense.objects.create(**validated_data)
        return expense
