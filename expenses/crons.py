from .models import ConcurrentExpense, Expense


def register_monthly_expenses():
    concurrent_expenses = ConcurrentExpense.objects.all()

    for concurrent_expense in concurrent_expenses:
        print(concurrent_expense)
        expense = Expense.objects.create(
            amount=concurrent_expense.amount,
            created_by=concurrent_expense.created_by,
            name=concurrent_expense.name,
            category=concurrent_expense.category)
        expense.save()
