from django.db import models
from django.contrib.auth.models import User

class Job(models.Model):
    JOB_TYPES = [
        ("Full-Time", "Full-Time"),
        ("Part-Time", "Part-Time"),
        ("Internship", "Internship"),
        ("Remote", "Remote"),
    ]


    title = models.CharField(max_length=200)
    company = models.CharField(max_length=200)
    location = models.CharField(max_length=150)
    salary = models.DecimalField(max_digits=10, decimal_places=2)
    description = models.TextField()
    job_type = models.CharField(max_length=20, choices=JOB_TYPES)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.title} - {self.company}"
class Profile(models.Model):
    ROLE_CHOICES = [
        ("Employer", "Employer"),
        ("Job Seeker", "Job Seeker"),
    ]

    user = models.OneToOneField(User, on_delete=models.CASCADE)
    role = models.CharField(max_length=20, choices=ROLE_CHOICES)
    phone = models.CharField(max_length=15)

    def __str__(self):
        return self.user.username
class Application(models.Model):
    STATUS_CHOICES = [
        ("Pending", "Pending"),
        ("Reviewed", "Reviewed"),
        ("Rejected", "Rejected"),
        ("Selected", "Selected"),
    ]

    job = models.ForeignKey(Job, on_delete=models.CASCADE)
    applicant = models.ForeignKey(User, on_delete=models.CASCADE)
    resume = models.FileField(upload_to="resumes/")
    cover_letter = models.TextField()
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default="Pending")
    applied_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.applicant.username} - {self.job.title}"