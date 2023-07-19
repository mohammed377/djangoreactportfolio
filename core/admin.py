from django.contrib import admin

# Register your models here.
from .models import *

admin.site.register(Profile)
admin.site.register(Skill)
admin.site.register(SocialLink)
admin.site.register(Project)
admin.site.register(Achievement)
