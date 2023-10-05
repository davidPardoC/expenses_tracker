from django.test import TestCase
from .models import User
from rest_framework.test import APIClient
from rest_framework import status
import json
# Create your tests here.


class UserTest(TestCase):
    def setUp(self) -> None:
        user = User(email='ychag@example.com',
                    username='test',
                    password='test',
                    first_name='test',
                    last_name='test')
        user.set_password('admin123')
        user.save()

    def test_user_creation(self):
        client = APIClient()
        response = client.post('/api/users/signup/',
                               {"email": "david.pardo.cuenca@gmail.com",
                                "username": "davidPardoC1",
                                "first_name": "David",
                                "last_name": "Pardo"})

        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(json.loads(response.content), {
            "username": "davidPardoC1",
            "first_name": "David",
            "last_name": "Pardo",
            "email": "david.pardo.cuenca@gmail.com",
            'monthly_budget': 0.0,
        })
