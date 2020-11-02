from django.db import models


class Associate(models.Model):
    associate_name = models.CharField(max_length=200)
    associate_address = models.CharField(max_length=200)

    def __str__(self):
        return self.associate_name