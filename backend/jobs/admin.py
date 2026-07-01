from django.contrib import admin
from .models import Job, Profile
from .models import Job, Profile, Application

admin.site.register(Job)
admin.site.register(Profile)
admin.site.register(Application)
