from django.core.exceptions import ObjectDoesNotExist
from rest_framework import status, permissions
from rest_framework.response import Response
from rest_framework.views import APIView

from api.serializers.feedback_serializers import FeedbackSerializer
from feedback.models import FeedbackItem
from feedback.tasks import send_delay_email


class FeedbackApiView(APIView):
    permission_classes = (permissions.AllowAny,)

    def get(self, request):
        item = FeedbackItem.objects.all()
        serializer = FeedbackSerializer(item, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = FeedbackSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            email = request.data.get('user').get('email')
            send_delay_email.delay(email)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, name, format=None):
        try:
            feedback = FeedbackItem.objects.get(user__name=name)
            feedback.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)
        except ObjectDoesNotExist:
            return Response({'message': 'Такой пользователь не подписан на рассылку'}, status=status.HTTP_204_NO_CONTENT)
