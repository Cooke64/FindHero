from django.urls import include, path
from rest_framework import routers

from api.views.feedback_views import FeedbackApiView
from api.views.news_item_views import NewsItemViewSet

router = routers.DefaultRouter()
router.register(r'news', NewsItemViewSet, )

urlpatterns = [
    path('/', include(router.urls)),
    path('/feedback/', FeedbackApiView.as_view()),
    path('/feedback/<slug:name>/', FeedbackApiView.as_view()),
]