# Generated by Django 3.2.8 on 2021-12-07 14:33

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('botenv', '0002_auto_20211206_1602'),
    ]

    operations = [
        migrations.CreateModel(
            name='Submission',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('exec_path', models.CharField(max_length=500)),
                ('game_name', models.CharField(max_length=100)),
                ('score', models.IntegerField(default=0)),
                ('bot', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='botenv.botitem')),
            ],
        ),
    ]
