from django.shortcuts import render
from rest_framework import permissions
from rest_framework.views import APIView
from .models import Contact
from django.core.mail import send_mail
from rest_framework.response import Response
from smtplib import SMTPException

# Create your views here.

class ContactCreateView(APIView):
    permission_classes = (permissions.AllowAny,)

    def post(self, request, format=None):
        data = self.request.data
        subject = data['subject']
        message = data['message']
        print(subject, message)
        try:
            send_mail(subject, message,'sauravroy288@gmail.com',['sauravroy289@gmail.com'],fail_silently=False)
            contact = Contact(name=data['name'],email=data['email'],subject=data['subject'],message=data['message'])
            contact.save()
            return Response({"Success":"Message saved successfully"})
        
        except SMTPException as e:
            return Response({"Error":e})