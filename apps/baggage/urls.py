from django.urls import path
from apps.baggage.views import *

urlpatterns = [
    path("chocolate/create", KnapsackAPIView.as_view(), name="baggae-create"),
    path("chocolate-list", ChocolatelistAPIView.as_view(), name="chocolates-list"),
]