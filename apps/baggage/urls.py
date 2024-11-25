from django.urls import path
from apps.baggage.views import *

urlpatterns = [
    path("baggage/create", BaggageCreateAPIView.as_view(), name="baggae-create"),
]