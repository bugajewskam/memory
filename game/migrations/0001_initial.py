# Generated by Django 4.0.2 on 2022-02-06 16:47

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Memory',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('img_1', models.ImageField(upload_to='uploads/')),
                ('img_2', models.ImageField(upload_to='uploads/')),
                ('img_3', models.ImageField(upload_to='uploads/')),
                ('img_4', models.ImageField(upload_to='uploads/')),
                ('img_5', models.ImageField(upload_to='uploads/')),
                ('img_6', models.ImageField(upload_to='uploads/')),
                ('img_7', models.ImageField(upload_to='uploads/')),
                ('img_8', models.ImageField(upload_to='uploads/')),
            ],
        ),
    ]
