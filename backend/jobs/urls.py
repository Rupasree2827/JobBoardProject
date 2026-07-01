from django.urls import path
from .views import (
    JobListCreateView,
    JobRetrieveUpdateDeleteView,
    ApplicationListCreateView,
)

urlpatterns = [
    # Job APIs
    path('', JobListCreateView.as_view(), name='job-list-create'),
    path('<int:pk>/', JobRetrieveUpdateDeleteView.as_view(), name='job-detail'),

    # Application APIs
    path('applications/', ApplicationListCreateView.as_view(), name='application-list-create'),
]