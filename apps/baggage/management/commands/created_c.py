
from typing import List, Tuple
from django.http import JsonResponse
from django.core.management.base import BaseCommand
from apps.baggage.models import Chocolates

class Command(BaseCommand):
    help = 'Populates the database with predefined chocolates.'

    def handle(self, *args, **kwargs):
        chocolates = [
            {"Item": "Dark Chocolate", "Weight": 50, "Value": 85, "Ratio": 1.7},
            {"Item": "Milk Chocolate", "Weight": 100, "Value": 75, "Ratio": 0.75},
            {"Item": "White Chocolate", "Weight": 125, "Value": 40, "Ratio": 0.32},
            {"Item": "Chocolate Truffles", "Weight": 60, "Value": 150, "Ratio": 2.5},
            {"Item": "Hazelnut Chocolate", "Weight": 80, "Value": 120, "Ratio": 1.5},
            {"Item": "Caramel Chocolate", "Weight": 150, "Value": 50, "Ratio": 0.33},
            {"Item": "Dark Chocolate Bars", "Weight": 90, "Value": 55, "Ratio": 0.61},
            {"Item": "Mocha Chocolate", "Weight": 110, "Value": 65, "Ratio": 0.59},
            {"Item": "Chocolate Fudge", "Weight": 70, "Value": 90, "Ratio": 1.29},
        ]

        for idx, chocolate in enumerate(chocolates, start=1):
            Chocolates.objects.create(
                order=idx,
                name=chocolate["Item"],
                weight=chocolate["Weight"],
                value=chocolate["Value"],
                ratio=chocolate["Ratio"]
            )

        self.stdout.write(self.style.SUCCESS('Successfully added chocolates to the database.'))