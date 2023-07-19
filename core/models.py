from django.db import models
from django.contrib.auth.models import User

class Profile(models.Model):
    user = models.ForeignKey(User,on_delete=models.CASCADE,related_name="user_profile")
    name = models.CharField(max_length=200)
    birthday = models.DateField()
    study = models.CharField(max_length=200)
    degree = models.CharField(max_length=200)
    country = models.CharField(max_length=200)
    work = models.CharField(max_length=200)
    bio = models.TextField()



class Skill(models.Model):
    LEVEL_CHOICES = [
        ('Beginner', 'Beginner'),
        ('Intermediate', 'Intermediate'),
        ('Advanced', 'Advanced'),
    ]    
    profile = models.ForeignKey(Profile, on_delete=models.CASCADE, related_name='skills') 
    title = models.CharField(max_length=50)   
    level = models.CharField(max_length=20, choices=LEVEL_CHOICES)
    notes = models.TextField(blank=True)
    
        
    def __str__(self):
        return self.title
    
class Project(models.Model):    
    profile = models.ForeignKey(Profile, on_delete=models.CASCADE, related_name='projects')
    title = models.CharField(max_length=100)
    description = models.TextField()    
    image = models.ImageField(upload_to='project_images', blank=True)    
    url = models.URLField()    
    created = models.DateField(auto_now_add=True)
    featured = models.BooleanField(default=False)
    
    def __str__(self):
        return self.title
    

class Achievement(models.Model):    
    image = models.ImageField(upload_to='achievements')
    title = models.CharField(max_length=120)
    link = models.URLField()

    def __str__(self):
        return self.title
    

class SocialLink(models.Model):
    
    SOCIAL_CHOICES = [
        ('FB', 'Facebook'),
        ('LI', 'LinkedIn'),
        ('IG', 'Instagram'),
        ('TW', 'Twitter'),
        ('GH', 'GitHub')   

    ]
    
    profile = models.ForeignKey(Profile, on_delete=models.CASCADE, related_name='social_links')   
    name = models.CharField(max_length=5,choices=SOCIAL_CHOICES)    
    url = models.URLField()
    
    class Meta:
        unique_together = ('profile', 'name')  
        
    def __str__(self):
        return self.name 