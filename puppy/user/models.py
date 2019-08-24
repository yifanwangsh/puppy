from django.db import models

import uuid

# Create your models here.

class User(models.Model):
    id = models.UUIDField(primary_key=True, auto_created=True, default=uuid.uuid4, editable=False)
    username = models.CharField(max_length=20, default=None, unique=True)
    password = models.CharField(max_length=100)

    objects = models.Manager()