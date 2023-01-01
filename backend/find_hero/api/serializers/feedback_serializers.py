from rest_framework import serializers

from feedback.models import FeedbackItem


class FeedbackSerializer(serializers.ModelSerializer):
    class Meta:
        model = FeedbackItem
        fields = '__all__'
