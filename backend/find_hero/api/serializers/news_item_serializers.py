from rest_framework import serializers

from news.models import NewsItem, Image


class NewsImagesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Image
        fields = ('pk', 'image_b64',)

    def create(self, validated_data):
        image = validated_data.pop('image')
        return Image.objects.create(image=image)


class NewsItemDetailSerializer(serializers.ModelSerializer):
    images = NewsImagesSerializer(
        many=True, read_only=True, required=False
    )

    class Meta:
        model = NewsItem
        fields = ('pk', 'title', 'created_at', 'text', 'images')


class NewsItemShortSerializer(serializers.ModelSerializer):
    image_to_show = NewsImagesSerializer(
        read_only=True,
        required=False,
        source='get_first_images'
    )
    created_at = serializers.DateTimeField(format="%d %B %Y г.")

    class Meta:
        model = NewsItem
        fields = ('pk', 'title', 'preview', 'created_at', 'image_to_show')
