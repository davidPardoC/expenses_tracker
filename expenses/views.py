from rest_framework import mixins, status, viewsets
from rest_framework.response import Response
from .serializer import CategoryModelSerializer, CategorySerializer, ExpenseModelSerializer, CreateExpenseSerializer
from .permission import IsStandarUser
from .models import Category, Expense


class CategoryViewSet(mixins.ListModelMixin, mixins.CreateModelMixin, viewsets.GenericViewSet):
    serializer_class = CategoryModelSerializer

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
        queryset = Category.objects.all()
        return queryset


class ExpenseViewSet(mixins.ListModelMixin, mixins.CreateModelMixin, mixins.UpdateModelMixin, mixins.DestroyModelMixin, viewsets.GenericViewSet):
    serializer_class = ExpenseModelSerializer

    def create(self, request, *args, **kwargs):
        serializer = CreateExpenseSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        expense = serializer.save()
        data = ExpenseModelSerializer(expense).data
        return Response(data, status=status.HTTP_201_CREATED)

    def get_queryset(self):
        from_date = self.request.query_params.get("from", None)
        to_date = self.request.query_params.get("to", None)
        queryset = Expense.objects.all()
        return queryset
