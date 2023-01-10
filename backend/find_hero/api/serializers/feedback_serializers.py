from rest_framework import serializers
from rest_framework.validators import UniqueValidator

from feedback.models import FeedbackItem, FeedbackUser


class UserFeedbackSerializer(serializers.ModelSerializer):
    email = serializers.CharField(validators=[
        UniqueValidator(
            queryset=FeedbackUser.objects.all(),
            message="Пользователь с такой почтой уже существует."
        )
    ])

    name = serializers.CharField(validators=[
        UniqueValidator(
            queryset=FeedbackUser.objects.all(),
            message="Пользователь с таким именем уже существует."
        )
    ])

    class Meta:
        model = FeedbackUser
        fields = ('name', 'email')


class FeedbackSerializer(serializers.ModelSerializer):
    user = UserFeedbackSerializer()

    class Meta:
        model = FeedbackItem
        fields = ('user', 'text')

    def create(self, validated_data):
        user_data = validated_data.pop('user')
        user, created = FeedbackUser.objects.get_or_create(**user_data)
        feedback, _ = FeedbackItem.objects.update_or_create(
            user=user,
            **validated_data
        )
        return feedback
