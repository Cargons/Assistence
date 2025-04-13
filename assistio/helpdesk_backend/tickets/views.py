from django.shortcuts import render
from rest_framework import viewsets
from .models import Ticket, Client, Operator
from .serializers import TicketSerializer, ClientSerializer, OperatorSerializer
from .permissions import IsAdminOrSupervisor

class TicketViewSet(viewsets.ModelViewSet):
    queryset = Ticket.objects.all().order_by('-created_at')
    serializer_class = TicketSerializer

class ClientViewSet(viewsets.ModelViewSet):
    queryset = Client.objects.all().order_by('name')
    serializer_class = ClientSerializer

from rest_framework.permissions import IsAdminUser

class OperatorViewSet(viewsets.ModelViewSet):
    queryset = Operator.objects.all()
    serializer_class = OperatorSerializer
    permission_classes = [IsAdminOrSupervisor]

