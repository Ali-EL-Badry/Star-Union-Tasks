from django.urls import path
from . import views

app_name = 'todo'

urlpatterns = [
    path('gettodo/', views.todo, name='todo'),
    path('showtodo/', views.showtodo, name='showtodo'),
]