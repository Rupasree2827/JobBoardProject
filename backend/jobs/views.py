from rest_framework import generics
from .models import Job, Application
from .serializers import JobSerializer, ApplicationSerializer


from rest_framework.permissions import IsAuthenticated

from rest_framework.permissions import IsAuthenticatedOrReadOnly

class JobListCreateView(generics.ListCreateAPIView):
    queryset = Job.objects.all()
    serializer_class = JobSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]


class JobRetrieveUpdateDeleteView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Job.objects.all()
    serializer_class = JobSerializer


from rest_framework.permissions import IsAuthenticated

class ApplicationListCreateView(generics.ListCreateAPIView):
    queryset = Application.objects.all()
    serializer_class = ApplicationSerializer
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(applicant=self.request.user)