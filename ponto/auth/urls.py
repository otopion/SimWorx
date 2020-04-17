from django.urls import path
from ponto.auth import views

app_name = 'auth'
urlpatterns = [
    path('login/', views.login, name='login'),
    path('logout/', views.logout, name='logout'),
]
