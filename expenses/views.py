from rest_framework import  serializers, viewsets

from expenses.models import Expense

# Create your views here.
class ExpensesSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Expense
    

class ExpensesViewSet(viewsets.ModelViewSet):
    queryset = Expense.objects.all()
    serializer_class = ExpensesSerializer

