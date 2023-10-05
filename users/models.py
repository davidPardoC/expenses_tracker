from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.


class User(AbstractUser):
    email = models.EmailField('email address', unique=True)
    monthly_budget = models.FloatField(default=0.0)
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']
