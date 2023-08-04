from rest_framework.generics import ListAPIView, RetrieveAPIView
from rest_framework import permissions
from .models import Realtor
from .serializers import RealtorSerializers

# Create your views here.

class RealtorListView(ListAPIView):
    permission_classes = (permissions.AllowAny,)
    queryset = Realtor.objects.all()
    serializer_class = RealtorSerializers
    pagination_class = None

class RealtorView(RetrieveAPIView):
    #permission_classes = (permissions.IsAuthenticated,)
    queryset = Realtor.objects.all()
    serializer_class = RealtorSerializers

class TopSellerView(ListAPIView):
    permission_classes = (permissions.AllowAny,)
    queryset = Realtor.objects.filter(top_seller=True)
    serializer_class = RealtorSerializers
    pagination_class = None
