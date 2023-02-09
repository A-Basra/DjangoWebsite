from django import forms
from django.contrib.auth.forms import UserChangeForm
from django.contrib.auth.models import User

class RegisterForm(UserChangeForm):
    email = forms.EmailField(required=True)
    class meta():
        model = User
        fields = ['Username', 'email', 'password1', 'password2']
