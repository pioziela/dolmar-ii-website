from django.contrib import admin
from django.urls import path
from website.views import managment_time

urlpatterns = [
    path('', managment_time)
]