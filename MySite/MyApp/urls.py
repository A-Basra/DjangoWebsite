from django.urls import path
from . import views
# Create your views here.

urlpatterns = [
    path('', views.Home, name="Home"),
    path('Portfolio', views.Portfolio, name="Portfolio"),
    path('About', views.About, name="About"),
    path('Contact', views.About, name="Contact")
]
