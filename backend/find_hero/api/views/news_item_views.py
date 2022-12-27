from rest_framework import viewsets, permissions
from rest_framework.decorators import action
from rest_framework.pagination import LimitOffsetPagination
from rest_framework.response import Response

from api.serializers.news_item_serializers import (
    NewsItemDetailSerializer,
    NewsItemShortSerializer
)
from news.models import NewsItem


class NewsItemViewSet(viewsets.ModelViewSet):
    queryset = NewsItem.objects.all()
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,)
    pagination_class = LimitOffsetPagination

    def get_serializer_class(self):
        if self.action == 'retrieve':
            return NewsItemDetailSerializer
        return NewsItemShortSerializer

    @action(detail=False)
    def last_four_items(self, request):
        amount_of_items = 4
        if NewsItem.objects.count() < amount_of_items:
            queryset = NewsItem.objects.all()
        else:
            queryset = NewsItem.objects.all()[:amount_of_items]
        serializer = NewsItemShortSerializer(
            queryset, many=True
        )
        return Response(serializer.data)
