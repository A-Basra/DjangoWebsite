from django.shortcuts import render

def Landing(request):
    return render(request, 'Landing.html')

def Home(request):
    return render(request, 'Home.html')

def Portfolio(request):
    return render(request, 'Portfolio.html')

def About(request):
    return render(request, 'About.html')

def Contact(request):
    return render(request, 'Contact.html')