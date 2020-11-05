from django.shortcuts import render
from django.http import HttpResponse
from datetime import datetime
from .models import Associate

# Create your views here.

"""
def test_response(request):
    return render(request, 'index.html')
"""


def index(request):
    birthday = datetime(1970,1,1)
    diff = datetime.now().year - birthday.year
    company_start = datetime(2010, 10, 1)
    company_years = datetime.now().year - company_start.year
    associations_quantity = len(Associate.objects.all())
    end_associationts_quantity = associations_quantity - int(associations_quantity/10)*10
    if end_associationts_quantity == (2 or 3 or 4):
        associations_text = 'wspólnoty mieszkaniowe'
    else:
        associations_text = 'wspólnot mieszkaniowych'
    return render(request, 'index.html', {'date': diff, 'company_years': company_years, 'associations_quantity': associations_quantity, 'associations_text': associations_text})

