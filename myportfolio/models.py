from django.db import models

class Contact(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    number = models.CharField(max_length=15)
    description = models.TextField()

    def __str__(self):
        return self.name

