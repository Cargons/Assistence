from django.contrib import admin
from .models import Ticket, Client, Operator

@admin.register(Ticket)
class TicketAdmin(admin.ModelAdmin):
    list_display = ('title', 'status', 'created_at')  # Campos visíveis na listagem
    list_filter = ('status', 'created_at')  # Filtros laterais
    search_fields = ('title', 'description')  # Campos para barra de busca

@admin.register(Client)
class ClientAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'birth_date')
    search_fields = ('name', 'email')

@admin.register(Operator)
class OperatorAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'birth_date')
    search_fields = ('name', 'email')
