from django.db import models

#=== Chocolates Model ===#
class Chocolates(models.Model):
    order = models.IntegerField(default=0)
    name = models.CharField(max_length=100)
    weight = models.FloatField()
    value = models.FloatField()
    ratio = models.FloatField()
    image = models.ImageField(upload_to='chocolate/', null=True, blank=True)
    
    def get_chocolate_image(self):
        if self.image:
            return self.image.url
        return "Chocolate"  

    def __str__(self):
        return self.name