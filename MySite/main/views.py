from django.shortcuts import render
from .forms import RegisterForm
from django.contrib.auth import login, authenticate
from django.contrib.auth.forms import UserCreationForm
from django.shortcuts import render, redirect

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

def SignUp(request):
    if request.method == "POST":
        form = RegisterForm(request.POST)
        if form.is_valid():
            form.save()
            username = form.cleaned_data.get('username')
            raw_password = form.cleaned_data.get('password1')
            user = authenticate(username=username, password=raw_password)
            login(request, user)
            return redirect('home')
    else:
        form = RegisterForm()
    return render(request, 'registration/signUp.html', {"form": form})