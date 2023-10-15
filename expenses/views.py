from rest_framework import mixins, status, viewsets
from rest_framework.response import Response
from .serializer import CategoryModelSerializer, CategorySerializer, ExpenseModelSerializer, CreateExpenseSerializer
from .permission import IsStandarUser
from .models import Category, Expense
from rest_framework.decorators import action
from django.db.models import Sum
from datetime import datetime


class CategoryViewSet(mixins.ListModelMixin, mixins.CreateModelMixin, viewsets.GenericViewSet):
    serializer_class = CategoryModelSerializer
    pagination_class = None

    def get_permissions(self):
        permission_classes = [IsStandarUser]
        return [permission() for permission in permission_classes]

    def create(self, request, *args, **kwargs):
        serializer = CategorySerializer(data=request.data, context={
                                        "request": self.request})
        serializer.is_valid(raise_exception=True)
        category = serializer.save()
        data = CategoryModelSerializer(category).data
        return Response(data, status=status.HTTP_201_CREATED)

    def get_queryset(self):
        user = self.request.user
        queryset = Category.objects.filter(created_by=user)
        return queryset


class ExpenseViewSet(mixins.ListModelMixin, mixins.CreateModelMixin, mixins.UpdateModelMixin, mixins.DestroyModelMixin, viewsets.GenericViewSet):
    serializer_class = ExpenseModelSerializer

    def get_permissions(self):
        permission_classes = [IsStandarUser]
        return [permission() for permission in permission_classes]

    def create(self, request, *args, **kwargs):
        serializer = CreateExpenseSerializer(
            data=request.data, context={"request": self.request})
        serializer.is_valid(raise_exception=True)
        expense = serializer.save()
        data = ExpenseModelSerializer(expense).data
        return Response(data, status=status.HTTP_201_CREATED)

    def get_queryset(self):
        from_date = self.request.query_params.get("from", None)
        to_date = self.request.query_params.get("to", None)
        user = self.request.user
        if from_date and to_date:
            queryset = Expense.objects.filter(created_by=user).filter(date__range=(from_date, to_date))
            return queryset
        queryset = Expense.objects.filter(created_by=user)
        return queryset

    @action(detail=False, methods=["get"])
    def total(self, request, *args, **kwargs):
        user = self.request.user
        current_month = datetime.now().month
        current_year = datetime.now().year
        total = Expense.objects.filter(
            created_by=user).filter(date__year=current_year, date__month=current_month).aggregate(total=Sum("amount", default=0))
        return Response(total, status=status.HTTP_200_OK)
