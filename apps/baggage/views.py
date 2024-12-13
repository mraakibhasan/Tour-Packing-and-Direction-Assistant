from typing import List, Tuple
from django.http import JsonResponse
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from django.core.exceptions import ObjectDoesNotExist
from .models import Chocolates
from apps.authkit.authentication import CookieJWTAuthentication
from .serializers import ChocolatesSerializer
from apps.base.base_response import base_success_response, base_error_response

class KnapsackAPIView(APIView):
    """
    API view to solve the fractional knapsack problem using Chocolates from the database.
    Expects a JSON payload with capacity and a list of chocolate IDs.
    """
    
    authentication_classes = [CookieJWTAuthentication]
    permission_classes = [IsAuthenticated]

    def post(self, request):
        try:
            data = request.data
            capacity = data.get("capacity")
            chocolate_ids = data.get("chocolates")

            if not isinstance(capacity, (int, float)) or capacity <= 0:
                return Response(
                    base_error_response("Invalid capacity. Provide a positive number."),
                    status=status.HTTP_400_BAD_REQUEST
                )

            if not isinstance(chocolate_ids, list) or not all(isinstance(id, int) for id in chocolate_ids):
                return Response(
                    base_error_response("Invalid chocolate IDs. Provide a list of integers."),
                    status=status.HTTP_400_BAD_REQUEST
                )

            chocolates = Chocolates.objects.filter(id__in=chocolate_ids)
            if not chocolates.exists():
                return Response(
                    base_error_response("No chocolates found with the provided IDs."),
                    status=status.HTTP_404_NOT_FOUND
                )

            items = [(chocolate.weight, chocolate.value, chocolate) for chocolate in chocolates]

            result = self.fractional_knapsack(capacity, items)

            selected_chocolates = []
            for item in result["selected_items"]:
                chocolate_data = ChocolatesSerializer(item["chocolate"], context={"request": request}).data
                selected_chocolates.append({
                    "chocolate": chocolate_data,
                    "weight": item["weight"],
                    "value": round(item["value"], 2)
                })

            return Response(
                base_success_response("Chocolate retrieved successfully", {
                    "max_value": result["max_value"],
                    "selected_items": selected_chocolates
                }),
                status=status.HTTP_200_OK
            )

        except Exception as e:
            return Response(
                base_error_response(str(e)),
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )

    @staticmethod
    def fractional_knapsack(capacity: float, items: List[Tuple[float, float, object]]) -> dict:
        """
        Solves the fractional knapsack problem.

        Args:
            capacity (float): Maximum weight capacity of the knapsack.
            items (List[Tuple[float, float, object]]): A list of tuples where each tuple represents
                an item with its weight, value, and chocolate object (weight, value, chocolate).

        Returns:
            dict: A response containing the maximum value and the selected items.
        """
        if capacity <= 0 or not items:
            return {"max_value": 0, "selected_items": []}

        # Calculate value per unit weight for each item
        items_with_ratio = [(weight, value, value / weight, chocolate) for weight, value, chocolate in items]

        # Sort items by value-to-weight ratio in descending order
        items_with_ratio.sort(key=lambda x: x[2], reverse=True)

        total_value = 0.0
        selected_items = []

        for weight, value, ratio, chocolate in items_with_ratio:
            if capacity == 0:
                break

            if weight <= capacity:
                # Take the whole item
                selected_items.append({"weight": weight, "value": value, "chocolate": chocolate})
                total_value += value
                capacity -= weight
            else:
                # Take a fraction of the item
                fraction = capacity / weight
                selected_items.append({"weight": capacity, "value": value * fraction, "chocolate": chocolate})
                total_value += value * fraction
                capacity = 0

        return {
            "max_value": total_value,
            "selected_items": selected_items
        }

class ChocolatelistAPIView(APIView):
    """
    API view to list all Chocolates from the database.
    """
    
    authentication_classes = [CookieJWTAuthentication]
    permission_classes = [IsAuthenticated]

    def get(self, request):
        try:
            chocolates = Chocolates.objects.all()
            serializer = ChocolatesSerializer(chocolates, many=True, context={"request": request})
            return Response(
                base_success_response("Chocolates retrieved successfully", serializer.data),
                status=status.HTTP_200_OK
            )
        except Exception as e:
            return Response(
                base_error_response(str(e)),
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )
