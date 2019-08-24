from django.shortcuts import render, HttpResponse
from .models import User

import json

# Create your views here.

def signup(request):
    if request.method == "POST":
        try:
            request_body = json.loads(request.body)
            username = request_body['username']
            password = request_body['password']
        except Exception:
            return HttpResponse("An exception occurred when parsing username and password", status=500)
        
        try:
            user_obj = User.objects.create(username=username, password=password)    
            return HttpResponse("User sign up successful!", status=200)
        except Exception:
            return HttpResponse("An exception has occurred when creating new user", status=500)
    else:
        return HttpResponse("No such method", status=404)

def login(request):
    if request.method == "POST":
        try:
            request_body = json.loads(request.body)
            username = request_body['username']
            password = request_body['password']
        except Exception:
            return HttpResponse("An exception occurred when parsing username and password", status=500)

        try:
            query_set = User.objects.filter(username=username, password=password)
            res = query_set.count()
            if res > 1:
                raise Exception
            elif res == 0:
                return HttpResponse("Authentication Failed!", status=403)
            else:
                return HttpResponse("Login Successful!", status=200)
        except Exception:
            return HttpResponse("An exception occurred when authenticating the user", status=500)
    else:
        return HttpResponse("No such method", status=404)