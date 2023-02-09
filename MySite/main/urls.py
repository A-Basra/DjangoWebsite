from django.urls import path
from . import views
# Create your views here.

urlpatterns = [
    path('', views.Landing, name="Landing"),
    path('Home', views.Home, name="Home"),
    path('Portfolio', views.Portfolio, name="Portfolio"),
    path('About', views.About, name="About"),
    path('Contact', views.About, name="Contact"),
    path('SignUp', views.SignUp, name='SignUp')
]
