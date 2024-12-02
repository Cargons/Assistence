from django.db import models

class Client(models.Model):
    name = models.CharField(max_length=255)
    email = models.EmailField()
    birth_date = models.DateField()

    def __str__(self):
        return self.name

class Operator(models.Model):
    name = models.CharField(max_length=255)
    email = models.EmailField()
    birth_date = models.DateField()

    def __str__(self):
        return self.name

class Ticket(models.Model):
    STATUS_CHOICES = [
        ('open', 'Open'),
        ('in_progress', 'In Progress'),
        ('closed', 'Closed'),
    ]
    title = models.CharField(max_length=255)
    description = models.TextField()
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='open')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
