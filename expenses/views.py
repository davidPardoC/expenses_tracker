from rest_framework import mixins, status, viewsets
from rest_framework.response import Response
from .serializer import CategoryModelSerializer, CategorySerializer
from .permission import IsStandarUser
from .models import Category
# Create your views here.


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
