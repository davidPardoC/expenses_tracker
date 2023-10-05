from django.db import models
import datetime
# Create your models here.


class Category(models.Model):
    name = models.CharField(max_length=200, unique=True)

    def __str__(self) -> str:
        return self.name


class Expense(models.Model):
    date = models.DateTimeField(auto_now_add=True, null=True)
    name = models.CharField(max_length=200)
    amount = models.FloatField()
    description = models.TextField()
    category = models.ForeignKey(Category, on_delete=models.CASCADE)

    def __str__(self) -> str:
        return f"{self.name} -> {self.amount}"
