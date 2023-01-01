from rest_framework import status, permissions
from rest_framework.response import Response
from rest_framework.views import APIView

from api.serializers.feedback_serializers import FeedbackSerializer
from feedback.models import FeedbackItem
from feedback.tasks import send_delay_email
from services.send_email import send_email


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
            send_delay_email.delay(serializer.data.get('email'))
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
