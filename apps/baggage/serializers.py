from rest_framework import serializers
from .models import Chocolates

class ChocolatesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Chocolates
        fields = '__all__'
        
    def to_representation(self, instance):
        response = super().to_representation(instance)
        request = self.context.get('request')
        response['image'] = request.build_absolute_uri(instance.image.url)
        return response