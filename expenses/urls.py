from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import CategoryViewSet, ExpenseViewSet, ConcurrentExpenseViewSet

router = DefaultRouter()
router.register(r'categories', CategoryViewSet, basename='categories')
router.register(r'expenses', ExpenseViewSet, basename='expenses')
router.register(r'concurrent-expenses', ConcurrentExpenseViewSet,
                basename='concurrentexpenses')


urlpatterns = [
    path('', include(router.urls)),
]
