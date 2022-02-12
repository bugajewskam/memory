from django.db import models

# Create your models here.
from django.forms import ModelForm


class Memory(models.Model):

    img_1 = models.ImageField(upload_to='uploads/', null=False)
    img_2 = models.ImageField(upload_to='uploads/', null=False)
    img_3 = models.ImageField(upload_to='uploads/', null=False)
    img_4 = models.ImageField(upload_to='uploads/', null=False)
    img_5 = models.ImageField(upload_to='uploads/', null=False)
    img_6 = models.ImageField(upload_to='uploads/', null=False)
    img_7 = models.ImageField(upload_to='uploads/', null=False)
    img_8 = models.ImageField(upload_to='uploads/', null=False)


class MemoryForm(ModelForm):
        class Meta:
            model = Memory
            fields = ['img_1', 'img_2', 'img_3', 'img_4', 'img_5', 'img_6', 'img_7', 'img_8']