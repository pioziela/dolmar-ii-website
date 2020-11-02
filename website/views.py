from django.shortcuts import render
from django.http import HttpResponse
from datetime import datetime

# Create your views here.

"""
def test_response(request):
    return render(request, 'index.html')
"""


def managment_time(request):
    birthday = datetime(1970,1,1)
    diff = datetime.now().year - birthday.year
    return render(request, 'index.html', {'date': diff})