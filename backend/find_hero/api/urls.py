from django.urls import include, path
from rest_framework import routers

from api.views.news_item_views import NewsItemViewSet

router = routers.DefaultRouter()
router.register(r'news', NewsItemViewSet, )

urlpatterns = [
    path('/', include(router.urls)),
]