from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework import status
from rest_framework.response import Response
from apps.baggage.utils import knapsack
from apps.base.base_response import base_success_response, base_error_response


#=== Baggage Create API ===#
class BaggageCreateAPIView(APIView):
    def post(self, request, *args, **kwargs):
        """
        Input:
        {
            "items": [
                {"name": "Item1", "cost": 60, "weight": 10},
                {"name": "Item2", "cost": 100, "weight": 20},
                {"name": "Item3", "cost": 120, "weight": 30}
            ],
            "capacity": 50
        }
        """
        try:
            data = request.data
            items = data.get("items", [])
            capacity = data.get("capacity", 0)

            # Validate input
            if not isinstance(items, list) or not isinstance(capacity, int) or capacity <= 0:
                return Response(
                    base_error_response("Invalid input. 'items' must be a list and 'capacity' must be a positive integer"),
                    status=status.HTTP_400_BAD_REQUEST
                )

            for item in items:
                if not all(key in item for key in ("name", "cost", "weight")):
                    return Response(
                        base_error_response("Invalid input. Each item must have 'name', 'cost', and 'weight'"),
                        status=status.HTTP_400_BAD_REQUEST
                    )

            # Call the knapsack utility function
            max_cost, selected_item_names = knapsack(items, capacity)

            # Retrieve full details of the selected items
            selected_items = [
                item for item in items if item["name"] in selected_item_names
            ]

            return Response(
                base_success_response("Cost retrieved successfully", {
                    "max_cost": max_cost,
                    "selected_items": selected_items
                }),
                status=status.HTTP_200_OK
            )
        except Exception as e:
            return Response(
                base_error_response(str(e)),
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )