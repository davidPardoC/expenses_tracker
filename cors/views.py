from django.shortcuts import render

# Create your views here.

def index(request):
    return render(request, "dist/index.html")

def logo(request):
    return render(request, "dist/logo.svg")